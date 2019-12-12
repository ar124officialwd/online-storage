import { ExtendedDirectoryContents } from './extended-directory-contents';
import { Directory } from 'api';

export class ExtendedDirectory extends Directory {
  contents: ExtendedDirectoryContents;
}
