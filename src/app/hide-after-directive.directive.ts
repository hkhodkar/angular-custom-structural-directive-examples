import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

class HideAfterContext {
  public $implicit = 1000;
  public hideAfter: number = 0;
  public counter: number = 0;
}

@Directive({
  selector: '[hideAfter]',
})
export class HideAfterDirectiveDirective implements OnInit {
  private _delay = 0;
  private context = new HideAfterContext();

  @Input('hideAfter')
  set delay(value: number | null) {
    this._delay = value ?? 0;
    this.context.counter = this.context.hideAfter = this._delay / 1000;
  }
  @Input('hideAfterThen') placeHolder: TemplateRef<HideAfterContext> | null =
    null;

  constructor(
    private template: TemplateRef<HideAfterContext>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template, this.context);
    var intervalId = setInterval(() => {
      this.context.counter--;
    }, 1000);
    setTimeout(() => {
      this.viewContainerRef.clear();
      clearInterval(intervalId);
      if (this.placeHolder) {
        this.viewContainerRef.createEmbeddedView(
          this.placeHolder,
          this.context
        );
      }
    }, this._delay);
  }

  static ngTemplateContextGuard(
    dir: HideAfterDirectiveDirective,
    ctx: unknown
  ): ctx is HideAfterContext {
    return true;
  }
}
