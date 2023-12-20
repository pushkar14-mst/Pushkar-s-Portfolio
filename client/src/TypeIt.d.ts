declare class TypeIt {
  constructor(element: string | HTMLElement, options?: TypeItOptions);
  type(text: string, options?: TypeItOptions): this;
  delete(deleteCount: number, options?: TypeItOptions): this;
  move(amount: number, options?: TypeItOptions): this;
  pause(time: number): this;
  go(): this;
  destroy(): void;
}

interface TypeItOptions {
  speed?: number;
  delay?: number;
  startDelay?: number;
  cursor?: boolean;
  cursorChar?: string;
  lifeLike?: boolean;
  loop?: boolean;
  loopDelay?: number;
  nextStringDelay?: number;
  breakLines?: boolean;
  autoStart?: boolean;
  beforeString?: (step: number, instance: TypeIt) => void;
  afterString?: (step: number, instance: TypeIt) => void;
  afterComplete?: (instance: TypeIt) => void;
}
