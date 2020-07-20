const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();

let export_config = {}

/**
 * App config
 */
export_config.app = {};
export_config.app["timezone"] = "America/mexico_city"
export_config.app["port"] = 3001
/**
 * Conversation Config
 */
export_config.conversation = {}
if (appEnv.services.conversation) {
  export_config.conversation['username'] = appEnv.services.conversation[0].credentials.username;
  export_config.conversation['password'] = appEnv.services.conversation[0].credentials.password;
} else {
  export_config.conversation['username'] = process.env.conversation_username || "808ce296-a6c7-4ff2-9381-72b4c4e6c540";
  export_config.conversation['password'] = process.env.conversation_password || "773bvsYaXGtD";
}
  export_config.conversation['version'] = "2018-09-20";
  export_config.conversation['workspace_id'] = process.env.workspace_id || '66085fc9-27f7-4785-a079-996584ad6988';

/**
 * Security config
 */
export_config.security = {}
export_config.security['cors_domain'] = (process.env.cors_domain ? (process.env.cors_domain).split(',') : "http://localhost:5000");
export_config.security['cors_enabled'] = process.env.cors_enabled || true;

module.exports = export_config;
