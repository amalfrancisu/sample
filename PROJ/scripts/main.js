function go()
{
    return alert('hello');
}

var myList = ['apples',go,23];

myList[3]='pineapples';

myList.forEach(function( value , index )
{
    alert("Ihave '+value+' in my shopping bag ");
});
