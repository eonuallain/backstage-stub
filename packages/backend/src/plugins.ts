import { githubActions } from '@backstage/plugin-github-actions-backend';

export default async function createPlugin(env: PluginEnvironment) {
  return [
    githubActions(env),
  ];
}