module.exports = {
  extends: ['@commitlint/config-conventional'],

  /**
   * Activating default ignore pattern to allow commits like "Merge branch.*into" or "Revert.*"
   * @see https://github.com/conventional-changelog/commitlint/blob/32daec2277f3db2855996db57264bed36ed5db21/%40commitlint/is-ignored/src/defaults.ts
   */
  defaultIgnores: true
}
