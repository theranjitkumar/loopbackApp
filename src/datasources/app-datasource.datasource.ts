import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

// mongodb://ranjit:ranjit12@ds011933.mlab.com:11933/rdb
const config = {
  name: 'appDatasource',
  connector: 'mongodb',
  url: 'mongodb://ranjit1:ranjit12@ds011933.mlab.com:11933/rdb',
  host: 'mlab.com',
  port: 11933,
  user: 'ranjit1',
  password: 'ranjit12',
  database: 'rdb',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AppDatasourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'appDatasource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.appDatasource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
