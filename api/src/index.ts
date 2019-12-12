export class FileSystemEntry {
  name: string = '';
  location: string = '';
  size: number = 0;
  exists: boolean = false;
  type: string = '';
}

export class Directory extends FileSystemEntry {
  readonly mediaType = 'directory';
  parent: string | undefined;
  subDirectories: number = 0;
  files: number = 0;
  contents: DirectoryContents = new DirectoryContents();
}

export class File extends FileSystemEntry {
  mediaType: string = '';
  extension: string = '';
}

export class DirectoryContents {
  files: File[] = [];
  directories: Directory[] = [];
}

export class Create {
  directory: Directory = new Directory();
}

export class Copy {
  from: FileSystemEntry = new FileSystemEntry();
  to: FileSystemEntry = new FileSystemEntry();
  recursive: boolean = false;
  keep: boolean = false;
}

export class Delete {
  entry: FileSystemEntry = new FileSystemEntry();
  recursive: boolean = false;
}

export class Upload {
  file: any = null;
  target: FileSystemEntry = new FileSystemEntry();
}

export class PricingPlan {
  title: string = '';
  price: number = 0;
  size: number = 0;
  period: string = '';
}

export class User {
  firstName: string = '';
  secondName: string = '';
  email: string = '';
  password: string = '';
  pricingPlan: PricingPlan = new PricingPlan();
}
