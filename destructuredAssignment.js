const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  // In destructured assignment we create a variable with the name of an object’s key,
  // that is wrapped in curly braces { } and assign to it the object.
  //given below, we are extracting functionality method in robot object, and assiging it
  //to the 'functionality' variable .
  const {functionality} = robot;
  //Since 'functionality' is referencing 'robot.functionality' 
  //we can call the methods available to 'robot.functionality' simply through functionality.
  functionality.beep();
  