import { Container } from 'inversify';
import { TYPES } from './interfaces/types';
import { IUrl } from './interfaces/url.interface';
import { URL } from '../../libs/url/url';

const LibraryContainer = new Container();
LibraryContainer.bind<IUrl>(TYPES.URL).to(URL);

export { LibraryContainer };