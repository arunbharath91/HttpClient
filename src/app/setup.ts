
import { PhotoService } from "./photo.service";
import './interceptor.service';

const photoService = new PhotoService();
photoService.getPosts().then(res => console.log(res));
