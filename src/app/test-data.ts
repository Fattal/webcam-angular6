import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
     let webcamDetails = [
      {id: 1,category: '',imageurl_as_base64:''}
    ];
    return { snapsorts: webcamDetails };
  }
} 