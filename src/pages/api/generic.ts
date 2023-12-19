type FunctionWithArgs = (...args: any[]) => any;

function tryCatchWrapper(func: FunctionWithArgs): FunctionWithArgs {
  return function (...args: any[]): any {
    try {
      return func(...args);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

export { tryCatchWrapper };
