const arrayQuotes=[
    {
        'author':'Jim Rohn',
        'quote':'Beware of what you become in pursuit of what you want...'
    },
    {
        'author':'Epictetus',
        'quote':'It\'s not what happents to you, but how react to it matters...  '
    },
    {
        'author':'Frank Sinatra',
        'quote':'The best revenge is massive success...'
    },
    {
        'author':'Wayne Gretzy',
        'quote':'You miss 100% of the shots you don\'t take...'
    },
    {
        'author':'Nelson Mandela',
        'quote':'Resenment is like drinking poison and waiting for your enemies to die...'
    },
    {
        'author':'Elbert Hubbard',
        'quote':'Do not take life seriously. You will not get out alive...'
    },
    {
        'author':'William James',
        'quote':'Act as if what you do makes a difference......It does !!!'
    },
    {
        'author':'Oscar Wilde',
        'quote':'Be yourself...everyone else is already taken.'
    },
    {
        'author':'Bernard M. Baruch',
        'quote':'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind'
    },
    {
        'author':'Mae West',
        'quote':'You only live once, but if you do it right, once is enough.'
    }
];


function generateQuote(){
    const ran= Number.parseInt(Math.random()*arrayQuotes.length+1);
    document.querySelector('#quoteOutput').textContent ="\"" + arrayQuotes[ran].quote + "\"";
    document.querySelector('#authorOutput').textContent ="--" + arrayQuotes[ran].author;
}
