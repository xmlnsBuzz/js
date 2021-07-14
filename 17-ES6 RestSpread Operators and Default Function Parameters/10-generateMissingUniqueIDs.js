/**
 * Create a function "tasksSortedByIds" with two parameters "tasks" and "tasksWithIds".
 * 
 * 1. Before performing any actions inside if the function you need to generate unique 4-digit "taskId" for each task where it is missing.
 * ? "generateTaskIds" > taskWithIds = generateTaskIds(tasks) > .map > copy task{...task} > generate taskId if needed > taskWithIds - array of tasks with taskIds
 * 
 * 2. At the beginning of the function log th the console quantity of the missing taskIds:
 * "quantity of the missing taskIds is 2"
 * 
//  ? .filter > hasOwnProperty("taskId") method
 * 
 * 3. Function should return array of tasks sorted by "taskId". All tasks in the sorted array must have "taskId".
 * 
 * ? sort tasksWithIds .sort((a,b) => a.taskId - b.taskId)
 * NOTE: Original "tasks" array should remain unchanged.
 * 
 * NOTE: Hints down below!
 * 
 * BONUS: Ensure that new unique 4-digit "taskId" is not the same as any "taskId" of the existing tasks.
 * 
 * ? do - while loop
 */

/** Generate unique 4-digit number
 * 1000 <= number < 10000
 * ( 1000 + Math.floor(Math.random()) * 9000)
**/

/**
console.log( Math.random() );
// 0 <= number < 1
console.log( Math.random() * 10000 );
// 0 <= number < 10000 with decimal places
console.log( Math.floor( Math.random() * 10000 ) );
// 0 <= number < 10000 without decimal places
console.log( 1000 + Math.floor( Math.random() * 9000 ) );
// 1000 <= number < 10000 without decimal places
*/

const generateTasksIds = tasks => {
  return tasks.map( ( { ...task } ) => {
    if ( !task.hasOwnProperty( "taskId" ) ) {
      let newTaskId;
      do {
        // newTaskId = 1000 + Math.floor( Math.random() * 9000 );
        newTaskId = 1 + Math.floor( Math.random() * 9 );
        console.log( newTaskId );
      } while (
        tasks.find( task => task.taskId === newTaskId )
      );

      task.taskId = newTaskId;
    }
    return task;
  } );
};

const tasksSortedByIds = (
  tasks,
  tasksWithIds = generateTasksIds( tasks )
) => {
  console.log( `Quantity of the missing taskIds is ${ tasks.filter( task => !task.hasOwnProperty( "taskId" ) ).length
    }`
  );
  return tasksWithIds.sort( ( a, b ) => a.taskId - b.taskId );
};

const tasks = [
  { title: "Meeting with John", taskId: 4 },
  { title: "Visit gym", taskId: 6 },
  { title: "Buy new phone", },
  { title: "Clean the room", taskId: 2 },
  { title: "Plan a trip", }
];
// const tasks = [
//   { title: "Meeting with John", taskId: 4621 },
//   { title: "Visit gym", taskId: 6821 },
//   { title: "Buy new phone", },
//   { title: "Clean the room", taskId: 2721 },
//   { title: "Plan a trip", }
// ];

// console.log( "Quantity of the missing taskIds", generateTasksIds( tasks ) );
console.log( "Sorted array of tasks with taskIds :", tasksSortedByIds( tasks ) );

console.log( "Original unsorted array of tasks with missing taskIds :", tasks );










