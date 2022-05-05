export interface IStore {
  system: {
    appName: string;
    version: string;
  };
  isLoading: boolean;
}

export interface IState extends IStore {
  localStorageData1: string;
  localStorageData2: string; 
}