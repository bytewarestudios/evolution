import { Container } from 'inversify';
import { TYPES } from './types';
import { IUrl } from './interfaces/url.interface';
import { Url } from '../libs/url';

const myContainer = new Container();
myContainer.bind<IUrl>(TYPES.Url).to(Url);

export { myContainer };