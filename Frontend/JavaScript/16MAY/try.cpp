// #include <iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"Enter the size for pattern";
//     cin>>n;
//     for(int i=1; i<=n; i++){
        
//         for(int j=1; j<=n; j++){
//             if((i==1 || i==4) || (j==1 || j==4)){
//             cout<<"+";
//         }
//         else{
//                 cout<<" ";
//             }
//         }
//         cout<<endl;
//     }
// }

/*

   *
  * *
 *   *
*     *
 *   *
  * *
   * 
 */

// #include <iostream>
// using namespace std;
// int main()
// {
//     for(int row=1; row<=5; row++){
//         for(int col=1; col<=5-row; col++){
//             cout<<" ";
//         }
//         for(int col=1; col<=row*2-1; col++){
//             cout<<"*";
//         }
//         cout<<endl;
//     }
   

//     return 0;
// }




/*

    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *


*/



/*



#include <iostream>
using namespace std;
int main(){
    for(int i=1; i<=5; i++){
        for(int j=1; j<=5-i; j++){
            cout<<" ";
        }
        for(int j=1; j<=2*i-1; j++){
            if(j == 1 || 2*i-1 == j){
                cout<<"*";
            }
            else{
                cout<<" ";
            }
        }
        cout<<endl;
    }
    for(int i=5; i>=1; i--){
        for(int j=5-i; j>=1; j--){
            cout<<" ";
        }
        for(int j=2*i-1; j>=1; j--){
            if(j == 1 || 2*i-1 == j){
                cout<<"*";
            }
            else{
                cout<<" ";
            }
        }
        cout<<endl;
    }
}

 */

/*

+       +
 +     +
  +   +
   + +
    +
   * *
  *   *
 *     *
*       *

*/

/*

// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
int main() {
    // Write C++ code here
    for(int i=5; i>=1; i--){
        for(int j=5-i; j>=1; j--){
            cout<<" ";
        }
        for(int j=2*i-1; j>=1; j--){
            if(j==1 || 2*i-1 == j){
                cout<<"+";
            }
            else{
                cout<<" ";
            }
        }
        cout<<endl;
    }
    for(int i=2; i<=5; i++){
        for(int j =1; j<=5-i; j++){
            cout<<" ";
        }
        for(int j=1; j<=2*i-1; j++){
            if(j==1||2*i-1 == j){
                cout<<"*";
            }
            else{
                cout<<" ";
            }
        }
        cout<<endl;
    }
    

    return 0;
}

*/