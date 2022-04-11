export interface IWidget {
  refresh: () => void;
  load?: () => void;
}
