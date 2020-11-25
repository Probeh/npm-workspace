const npm = require( 'npm' );
const packages = [];

const options = {
  '--single': 'true',
  '--name': '',
  '-n': '',
  '--serve': 'false',
  '-s': 'false',
  '--open': 'false',
  '-o': 'false'
};

Object.keys( options )
  .forEach( arg => {
    if ( process.argv.some( x => x.startsWith( arg ) ) ) {
      options[ arg ] = process.argv
        .find( ( x ) => x.includes( arg ) ).split( `${arg}=` )[ 1 ];
    }
  } );

npm.load( () => {
  if ( options[ '--single' ].match( 'true' ) && options[ '--name' ] )
    npm.run( `ng build ${options[ '--name' ]}` );
  else if ( options[ '--single' ].match( 'false' ) )
    packages.forEach( item => npm.run( `ng build --project=${item}` ) );
  if ( [ options[ '--serve' ].match( 'true' ) ] )
    npm.run( `ng serve ` + options[ '--open' ].match( 'true' ) ? '--open' : '' );
} );