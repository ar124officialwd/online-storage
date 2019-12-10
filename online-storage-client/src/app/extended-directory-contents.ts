import { ExtendedFile } from './extended-file';
import { DirectoryContents } from 'api';

export class ExtendedDirectoryContents extends DirectoryContents {
  files: ExtendedFile[];
}
