// import the controller import { EmotionalReactionController} from '../src/controllers/EmotionalRecordController';


function example_of_function_1(x: number): number {
    return x * 2;
  }
  
function example_of_function_2(x: number,y: number): number {
    return x + y;
  }

describe('testing controller_name  file', () => {

  test('name of function', () => {
    expect(example_of_function_1(5)).toBe(10); //call the function what you want test
  });

 test('example_of_function_2', () => {
    expect(example_of_function_2(5,5)).toBe(10); //call the function what you want test
  });
  
});