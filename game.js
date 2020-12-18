var board = [
   [ 0,0,0,2,6,0,7,0,1],
   [ 6,8,0,0,7,0,0,9,0],
   [ 1,9,0,0,0,4,5,0,0],
   [ 8,2,0,1,0,0,0,4,0],
   [ 0,0,4,6,0,2,9,0,0],
   [ 0,5,0,0,0,3,0,2,8],
   [ 0,0,9,3,0,0,0,7,4],
   [ 0,4,0,0,5,0,0,3,6],
   [ 7,0,3,0,1,8,0,0,0]
]
//0 represents empty space in the board

 
function main(arr)
{
    for (let i=0;i<arr.length;i++) 
    {
        for (let j=0;j<arr[i].length;j++)
        {
            if(arr[i][j]==0)  //this condition check empty space in board
            {
        
               for (let k=1;k<=9;k++) // this for  loop in used to enter value in board
                {
                  if( row(i,k,arr) && col(j,k,arr) && box(i,j,k,arr)) // hear row column and 3x3 box fuction are called
                  {
                      arr[i][j]=k; //if row column and box funtions return true assing value to the empty space 
                      if( main(arr)) //here backtracking happens as main function is called again 
                      return true;// if everything return true agian it goes ahead 
                     else 
                     arr[i][j] =0;//else triggers backtracking 
                     
                  }
                }
                return false; 
            }
        }
        
    }
    return true;
  
}
function row(row,val,arr) // this function is used to check if the value can be inserted into row 
{
    for(let i=0;i<arr.length;i++)  // for loop iterates over row 
    {
        if(arr[row][i]==val)// checks if value is present in the row
        {
            return false; // if value is present in row return false
        }
         
    }
    return true; // else return true
    
   
}

function col(col,val,arr)// this function is used to check if the value can be inserted into  column
{
    for(let i=0;i<arr.length;i++) // for loop iterates over col
     {
               if(arr[i][col]==val)// checks if value is present in the col
                  {
                    return false;//if value is present in col return false
                  }
                      
     }
     return true; // else return true
    
}

function box(row,col,val,arr)
{
    var r = Math.floor(row/3) * 3; // math.floor is used to remove the decimal of a 
    var c = Math.floor(col/3) * 3;//number i.e if number is 1.99 id remove the decimal value and  takes 1 
	
	for (var i = 0; i < 3; i++) 
	{                                  // here both for loop in iterates over 3x3 box 
		for (var j = 0; j < 3; j++)
		{	
			if(arr[r + i][c + j] === val) // checks if value is present in box
		    {
                return false;// if value is present then return false
            
            }
		}	
	}
	return true;//else return true
}
main(board); // calling main function 
console.log(board);// printing board
