export const LANGUAGE_VERSIONS =  {
  javascript: "18.15.0",
  php: "8.2.3",
  python: "3.10.0",
  swift: "5.3.3",
  typescript: "5.0.3",
  java: "15.0.2",
  cpp: "10.2.0",
  c: "10.2.0",
}


// boilerplates.js

const BOILERPLATE_CODE_SNIPPETS = {

  javascript: `

function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
`,

  typescript: `

function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
`,

  python: `

def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
`,

  php: `<?php

function greet($name) {
    return "Hello, " . $name . "!";
}

echo greet("World");
?>`,

  swift: `

func greet(name: String) -> String {
    return "Hello, \\(name)!"
}

print(greet(name: "World"))
`,

  java: `

public class Main {
    public static void main(String[] args) {
        System.out.println(greet("World"));
    }

    public static String greet(String name) {
        return "Hello, " + name + "!";
    }
}
`,

  cpp: `

#include <iostream>
using namespace std;

string greet(string name) {
    return "Hello, " + name + "!";
}

int main() {
    cout << greet("World") << endl;
    return 0;
}
`,

  c: `

#include <stdio.h>

void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}

int main() {
    greet("World");
    return 0;
}
`,

  html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello World</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is an Online Code Editor.</p>
</body>
</html>
`,
};

export default BOILERPLATE_CODE_SNIPPETS;
