function isAppleDevice() {
    const userAgent =
      navigator.userAgent || navigator.vendor || window.opera;
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return true;
    }
  
    if (/Macintosh|Mac OS X/.test(userAgent)) {
      return true;
    }
  
    return false;
  }
  
  
  AFRAME.registerComponent("mytarget", {
    init: function () {
      window.addEventListener("contextmenu",(e)=>e.preventDefault());
      document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || (e.ctrlKey && (e.key === 'u' || e.key === 'U'))) {
          e.preventDefault();
        }
        
        
        
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
          e.preventDefault();
        }
      });
      
      const showInfo = () =>
		{
			let y = 0;

			const websiteButton = document.querySelector( "#website-btn" );
      const locationButton1 = document.querySelector( "#location-btn1" );
      const locationButton2 = document.querySelector( "#location-btn2" );
      const locationButton3 = document.querySelector( "#location-btn3" );
      const locationButton4 = document.querySelector( "#location-btn4" );
      const locationButton5 = document.querySelector( "#location-btn5" );
      const locationText1 = document.querySelector( "#locationText1" );
      const locationText2 = document.querySelector( "#locationText2" );
      const locationText3 = document.querySelector( "#locationText3" );
      const locationText4 = document.querySelector( "#locationText4" );
      const locationText5 = document.querySelector( "#locationText5" );

			
			
      setTimeout( () =>
			{
				locationButton1.setAttribute( "visible", true );
				locationButton2.setAttribute( "visible", true );
				locationButton3.setAttribute( "visible", true );
				locationButton4.setAttribute( "visible", true );
				locationButton5.setAttribute( "visible", true );
				locationText1.setAttribute( "visible", true );
				locationText2.setAttribute( "visible", true );
				locationText3.setAttribute( "visible", true );
				locationText4.setAttribute( "visible", true );
				locationText5.setAttribute( "visible", true );
			}, 500 );
      setTimeout( () =>
			{
				websiteButton.setAttribute( "visible", true );
			}, 600 );

		
			locationButton1.addEventListener( 'click', function ( evt )
			{
				window.location.href = "https://maps.app.goo.gl/kbCZ1r9W5pBwXAjr7";
			} );
			locationText1.addEventListener( 'click', function ( evt )
			{
				window.location.href = "https://maps.app.goo.gl/kbCZ1r9W5pBwXAjr7";
			} );
			locationButton2.addEventListener( 'click', function ( evt )
			{
				window.location.href = "https://maps.app.goo.gl/EXfm7fD11RTGF8M87";
			} );
			locationText2.addEventListener( 'click', function ( evt )
			{
				window.location.href = "https://maps.app.goo.gl/EXfm7fD11RTGF8M87";
			} );
			locationButton3.addEventListener( 'click', function ( evt )
			{
				window.location.href = "https://maps.app.goo.gl/GHvHWomY2bnwrVmx9";
			} );
			locationText3.addEventListener( 'click', function ( evt )
			{
				window.location.href = "https://maps.app.goo.gl/GHvHWomY2bnwrVmx9";
			} );
			locationButton4.addEventListener( 'click', function ( evt )
			{
				window.location.href = "https://maps.app.goo.gl/77ckkpMovtjLKRcaA";
			} );
			locationText4.addEventListener( 'click', function ( evt )
			{
				window.location.href = "https://maps.app.goo.gl/77ckkpMovtjLKRcaA";
			} );
			locationButton5.addEventListener( 'click', function ( evt )
			{
				window.location.href = "https://maps.app.goo.gl/Yo977YY9kYiRaBsV9";
			} );
			locationText5.addEventListener( 'click', function ( evt )
			{
				window.location.href = "https://maps.app.goo.gl/Yo977YY9kYiRaBsV9";
			} );
			websiteButton.addEventListener( 'click', function ( evt )
			{
        console.log("clicked");
        
				window.location.href = "service/service.html";
			} );
		}
    
      this.el.addEventListener("targetFound", (event) => {
        setTimeout( () =>
					{
						showInfo();
					}, 300 );
      });
  
      this.el.addEventListener("targetLost", (event) => {  
      });
    },
  });
  
 