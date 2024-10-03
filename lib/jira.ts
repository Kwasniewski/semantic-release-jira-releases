import JiraApi from 'jira-client'

import { PluginConfig, PluginContext } from './types'

export function makeClient(config: PluginConfig, context: PluginContext): JiraApi {
  return new JiraApi({
    protocol: 'https',
    host: config.jiraHost,
    bearer: context.env.JIRA_AUTH,
  });
}
