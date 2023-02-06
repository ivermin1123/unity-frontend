import { defaults } from 'jest-config';
import nextJestConfig from 'next/jest';
import { resolve } from 'path';
import type { JestConfigWithTsJest } from 'ts-jest';

const createJestConfig = nextJestConfig({
  dir: './',
});

const config: JestConfigWithTsJest = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@modules/(.*)$': resolve(__dirname, 'modules/$1'),
    '^@shared/(.*)$': resolve(__dirname, 'shared/$1'),
    '^@public/(.*)$': resolve(__dirname, 'public/$1'),
  },
};

export default createJestConfig(config);
