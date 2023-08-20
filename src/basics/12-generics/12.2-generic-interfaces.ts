// before
{
  interface DropdownOption {
    id: string;
    name: string;
    action: (context: any) => void;
    displayingCondition?: (context: any) => boolean;
  }

  const dropdownMenu: DropdownOption[] = [
    {
      id: 'fake-id1',
      name: 'Edit',
      action: (context) => { /* doing some actions here */ }, // context: any
    }
  ];
}

// after
{
  interface DropdownOption<T = any> {
    id: string;
    name: string;
    action: (context: T) => void;
    displayingCondition?: (context: T) => boolean;
  }

  interface Todo {
    id: string;
    title: string;
  }

  const dropdownMenu: DropdownOption<Todo>[] = [
    {
      id: 'fake-id1',
      name: 'Edit',
      action: (context) => { /* doing some actions here */ }, // context: Todo
    }
  ];
}



export {};
