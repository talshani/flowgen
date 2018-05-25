/* @flow */
import compiler from "../compiler";
import beautifier from "../beautifier";
import fs from "fs";

/*
These tests just compile and prettify using prettier.
If prettier fails to pars the compiled output it simply fails
 */

it("don't fail with uws", () => testFixture("uws"));

function test(typescript: string) {
  let compiled = compiler.compileDefinitionString(typescript);
  beautifier(compiled);
}

function testFixture(file: string) {
  test(fs.readFileSync(
    `${__dirname}/fixtures/${file}.d.ts`,
    "utf8",
  ));
}
