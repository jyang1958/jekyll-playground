---
YAML: YAML Ain't Markup Language

What It Is: YAML is a human friendly data serialization
  standard for all programming languages.

YAML Resources:
  YAML 1.2 (3rd Edition): http://yaml.org/spec/1.2/spec.html
  YAML 1.1 (2nd Edition): http://yaml.org/spec/1.1/
  YAML 1.0 (1st Edition): http://yaml.org/spec/1.0/
  YAML Issues Page: https://github.com/yaml/yaml/issues
  YAML Mailing List: yaml-core@lists.sourceforge.net
  YAML IRC Channel: "#yaml on irc.freenode.net"
  YAML Cookbook (Ruby): http://yaml4r.sourceforge.net/cookbook/ (local)
  YAML Reference Parser: http://ben-kiki.org/ypaste/

Projects:
  C/C++ Libraries:
  - libyaml       # "C" Fast YAML 1.1
  - Syck          # (dated) "C" YAML 1.0
  - yaml-cpp      # C++ YAML 1.2 implementation
  Ruby:
  - psych         # libyaml wrapper (in Ruby core for 1.9.2)
  - RbYaml        # YAML 1.1 (PyYaml Port)
  - yaml4r        # YAML 1.0, standard library syck binding
  Python:
  - PyYaml        # YAML 1.1, pure python and libyaml binding
  - PySyck        # YAML 1.0, syck binding
  Java:
  - JvYaml        # Java port of RbYaml
  - SnakeYAML     # Java 5 / YAML 1.1
  - YamlBeans     # To/from JavaBeans
  - JYaml         # Original Java Implementation
  Perl Modules:
  - YAML          # Pure Perl YAML Module
  - YAML::XS      # Binding to libyaml
  - YAML::Syck    # Binding to libsyck
  - YAML::Tiny    # A small YAML subset module
  - PlYaml        # Perl port of PyYaml
  C#/.NET:
  - YamlDotNet    # YAML 1.1 library with serialization support
  - yaml-net      # YAML 1.1 library
  - yatools.net   # (in-progress) YAML 1.1 implementation
  Golang:
  - Go-yaml       # YAML support for the Go language.
  - Go-gypsy      # Simplified YAML parser written in Go.
  PHP:
  - php-yaml      # libyaml bindings (YAML 1.1)
  - syck          # syck bindings (YAML 1.0)
  - spyc          # yaml loader/dumper (YAML 1.?)
  OCaml:
  - ocaml-syck    # YAML 1.0 via syck bindings
  Javascript:
  - JS-YAML       # Native PyYAML port to JavaScript.
  - JS-YAML Online# Browserified JS-YAML demo, to play with YAML in your browser.
  Actionscript:
  - as3yaml       # port of JvYAML (1.1)
  Haskell:
  - YamlReference # Haskell 1.2 reference parser
  Dart:
  - yaml # YAML package for Dart
  Others:
  - yamlvim (src) # YAML dumper/emitter in pure vimscript

Related Projects:
  - Rx            # Multi-Language Schemata Tool for JSON/YAML
  - Kwalify       # Ruby Schemata Tool for JSON/YAML
  - yaml_vim      # vim syntax files for YAML
  - yatools.net   # Visual Studio editor for YAML
  - JSON          # Official JSON Website
  - Pygments      # Python language Syntax Colorizer /w YAML support

News:
  - 20-NOV-2011 -- JS-YAML, a JavaScript YAML parser by Alexey Zapparov and Vitaly Puzrin.
  - 18-AUG-2010 -- Ruby 1.9.2 includes psych, a libyaml wrapper by Aaron Patterson.
  - 17-AUG-2010 -- vimscript parser/emitter was created by Nikolay Pavlov.
  - 01-OCT-2009 -- YAML 1.2 (3rd Edition) was patched.
  - 21-JUL-2009 -- YAML 1.2 (3rd Edition) was released.
  - 28-APR-2009 -- A new version of SnakeYAML was released.
  - 01-APR-2009 -- The YAML 1.2 spec was planned to be finalized by the end of the month.
  - 07-JAN-2009 -- Andrey Somov releases SnakeYAML, a 1.1 YAML Parser
  - 03-JAN-2009 -- Burt Harris announced YAML for .NET and editor for Visual Studio
  - 02-DEC-2008 -- Jesse Beder released YAML for C++
  - 11-MAY-2008 -- Oren Ben-Kiki has released a new YAML 1.2 spec draft
  - 29-NOV-2007 -- Alexey Zakhlestin has updated his Syck (YAML 1.0) binding for PHP
  - 23-NOV-2007 -- Derek Wischusen has release Action Script 3 YAML 1.1
  - 01-AUG-2006 -- Kirill Simonov has released libyaml, a parser and emitter in "C"
  - 06-JUN-2006 -- Ola Bini is at it again, this time with a Java implementation
  - 03-JUN-2006 -- Christophe Lambrechts and Jonathan Slenders announced a .NET parser
  - 07-MAY-2006 -- Ola Bini released a pure-ruby YAML 1.1 parser and emitter
  - 12-APR-2006 -- Kirill's YAML 1.1 parser for Python is now at PyYaml
  - 05-FEB-2006 -- Spyc YAML for PHP is now at version 0.3
  - 17-DEC-2005 -- Makoto Kuwata has released Kwalify 0.5, YAML/JSON schema validator
  - 14-DEC-2005 -- Toby Ho has released Jyaml, a Java library for YAML based on Rolf Veen's work
  - 30-AUG-2005 -- Kirill Simonov has produce a wonderful Python binding for Syck
  - 08-APR-2005 -- As it turns out, YAML is a superset of the JSON serialization language
  - 18-MAY-2005 -- Why has released version 0.55 of Syck
  - 28-DEC-2004 -- Announcing YAML 1.1 Working Draft
  - 01-OCT-2004 -- YAML for Cocoa was released by Will Thimbley
  - 08-FEB-2004 -- Slaven Rezic announced a new version of his Javascript binding
  - 29-JAN-2004 -- Ingy, Oren, and Clark spent 4 days hacking on the spec in Portland.
  - 10-OCT-2003 -- The Syck implementation with bindings for Ruby, Python,
                   and PHP is now at version .41
  - 26-APR-2003 -- Mike Orr has taken over the Pure Python development.
  - 26-APR-2003 -- Brian Ingerson has created a FIT platform for Wiki-like testing.
  - 24-JAN-2003 -- Updates to specification.
  - 25-JUL-2002 -- Both the Ruby and Python parsers have made significant progress.
                   There is an article about YAML by Kendall Grant Clark at xml.com.
                   There is also a draft XML binding.
  - 02-JUL-2002 -- Brian Ingerson will be giving a 45 minute presentation on YAML at the
                   O'Reilly Open Source Conference in San Diego on July 24th 2002.
  - 01-FEB-2002 -- Brian's Perl implementation YAML.pm, has been updated with new documentation.
                   Included in this release is YSH, a test shell for learning how YAML works.
  - 03-JAN-2002 -- YAML(tm) starts the new year with a new name YAML Ain't Markup Language.
  - 17-MAY-2001 -- YAML now has a mailing list at SourceForge.
  - 15-MAY-2001 -- YAML is started with a first pass specification.
# Maintained by Clark C. Evans
---

# Please open JavaScript console to inspect the data

{{page}}

<script src='yaml.js'></script>


