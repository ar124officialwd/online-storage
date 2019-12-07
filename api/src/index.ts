export class FileSystemEntry {
  name: string = '';
  location: string = '';
  size: number = 0;
  exists: boolean = false;
  type: string = '';

  constructor() {

  }
}

export class Directory extends FileSystemEntry {
  readonly mediaType = 'directory';
  parent: string | undefined;
  subDirectories: number = 0;
  files: number = 0;
  contents: DirectoryContents = new DirectoryContents()

  constructor() {
    super();
  }
}

export class File extends FileSystemEntry {
  mediaType: string = '';
  extension: string = '';

  constructor() {
    super();
  }
}

export class DirectoryContents {
  files: File[] = [];
  directories: Directory[] = [];

  constructor() {

  }
}


export class Create {
  directory: Directory = new Directory();

  constructor() {

  }
}
  
export class Copy {
  from: FileSystemEntry = new FileSystemEntry();
  to: FileSystemEntry = new FileSystemEntry();
  recursive: boolean = false;
  keep: boolean = false;

  constructor() {

  }
}

export class Delete {
  entry: FileSystemEntry = new FileSystemEntry();
  recursive: boolean = false;

  constructor() {

  }
}

export class Upload {
  file: any = null;
  target: FileSystemEntry = new FileSystemEntry();

  constructor() {

  }
}

export class PricingPlan {
  title: string = '';
  price: number = 0;
  size: number = 0;
  period: string = '';

  constructor() {

  }
}

export class User {
  firstName: string = '';
  secondName: string = '';
  email: string = '';
  password: string = '';
  pricingPlan: PricingPlan = new PricingPlan();

  constructor() {

  }
}
