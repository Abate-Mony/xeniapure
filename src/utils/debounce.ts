export default function debounce<T extends (...args: any[]) => any>(
    func: T, 
    delay: number = 500
  ) {
    let timerId: ReturnType<typeof setTimeout> | null = null;
  
    return function(this: any, ...args: Parameters<T>) {
      if (timerId) clearTimeout(timerId);
  
      timerId = setTimeout(() => {
        func.apply(this, args); // Correct `this` binding
      }, delay);
    };
  }
  