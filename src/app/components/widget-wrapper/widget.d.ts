export interface IWidget {
  buttonTitle: string;
  refresh: () => void;
  load?: () => void;
}
