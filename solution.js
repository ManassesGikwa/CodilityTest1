import time
function solution(A, D):
    #BDD
    // initialize Balances 
    //Check in the array if there are 3 dates with the same month,have -ve values and therefore exempt the monthly fee 
// calculate the total monthly fee (after adhering to the previous step)
    // calculate the balance

   //initialize the balance as 0
    balance =0
    total_monthly_fee =0
    //transaction has (amount and date)
    A[] //an array of amounts

    D[date] //an array of dates
    date = "YYYY-MM-DD"
    isMatch = true
    //monthly fee exempted if only 
        //there were 3 payments 
        //the total of the 3 paments >100
    
    monthly_fee= 5
    
    //monthly fee Exemption logic
    //access the array of dates and transactions 
    //for the date(compare them to check for either 3 dates )
    isMatch = (date) => D.some((e) => e.match(date.slice(3)));
    //Compare the corresponding index values of any 3 elements found above with the counterpart values in array  and check if their total is more than 100
    //for each date in 
 

    //balance is sum of the array as provided less the total_monthly_fee
    balance = sum(A)-(total_monthly_fee)

    