import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  ProjectType,
  TestReporter,
  TestTool,
} from '@srclaunch/types';

export default {
  name: '@srclaunch/icons',
  description: 'React icon components',
  type: ProjectType.Library,
  build: {
    bundle: {
      exclude: ['react'],
      globals: {
        react: 'React',
      },
    },
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    input: {
      directory: 'src',
      file: 'index.tsx',
    },
    platform: BuildPlatform.Browser,
    target: BuildTarget.ESNext,
    tool: BuildTool.Vite,
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Jest,
    verbose: true,
  },
};
