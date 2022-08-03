import LocalConfig from './EnvConfigs/local';
import LiveConfig from './EnvConfigs/live';
import DevConfig from './EnvConfigs/dev';

function getConfig() {
    const env = process.env.REACT_APP_STAGE || 'local'
    switch (env.trim()) {
        case 'local':
            return LocalConfig
        case 'dev':
            return DevConfig
        case 'live':
            return LiveConfig
        default:
            return LocalConfig
    }
}
export default getConfig()