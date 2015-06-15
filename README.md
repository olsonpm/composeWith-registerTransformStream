# composeWith-registerTransformStream

To test the registerTransformStream issue [#819](https://github.com/yeoman/generator/issues/819)
```
git clone git@github.com:olsonpm/composeWith-registerTransformStream.git
cd composeWith-registerTransformStream/generator-base
npm install && npm install --global .
cd ../generator-testing1
npm install && npm install --global .

# assuming you don't have ~/tmp.d/yeoman, let's make a temporary dir to test the generator
mkdir -p ~/tmp.d/yeoman/
cd ~/tmp.d/yeoman

# `yo testing1` shows the expected message "transforming 'test.js'"
yo testing1

# After running `yo base`, we expect the message "transforming 'test.js'".
#  Because it's composed however, the transform is not ran.
yo base
```
