# composeWith-registerTransformStream

To test my fix for the registerTransformStream issue [#819](https://github.com/yeoman/generator/issues/819)
```
git clone git@github.com:olsonpm/composeWith-registerTransformStream.git#fix
cd composeWith-registerTransformStream/generator-testing1
npm install
cd ../generator-base
npm install && npm link

# assuming you don't have ~/tmp.d/yeoman, let's make a temporary dir to test the generator
mkdir -p ~/tmp.d/yeoman/
cd ~/tmp.d/yeoman

# `yo base` will create three files
# - gen-base.txt
# - gen-test1.txt
# - test.js
#
# gen-base.txt is only located in generator-base's template, and will have the transformed
#   contents "generator base:\n"
# gen-test.txt is only located in generator-testing1's template, and will have the transformed
#   contents "generator testing1:\n"
# test.js is found in both generator-base and generator-testing1's template, and will have
#   the transformed contents "generator testing1:\n" due to later file writes overwriting
#   previous ones
yo base

# outputs:
# create gen-base.txt
# create test.js
# create gen-test1.txt

# To view the file names and contents:
for F in *; do echo $F; cat $F; echo ""; done

# outputs:
# gen-base.txt
# generator base:
# 
# gen-test1.txt
# generator testing1:
# 
# test.js
# generator testing1:
# var test;
```
