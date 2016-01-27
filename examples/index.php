<?php
		// --------------------------------------------------------------------------------------------------------------
		/*  
			TITLE:			Client Preview Page	
			VERSION:		2.6
			DATE:			06-10-2015
			AUTHOR:			Lee Redmond
			
		
		*/

		$sVersion		  = '2.5';

		// --------------------------------------------------------------------------------------------------------------
		// Bespoke Declarations for the preview:
		
        
		$creativesXML 	= simplexml_load_file("creatives.xml");     // load xml creatives data
		$coPartner		= (string)$creativesXML-> agency; 			// eg. "BBH"; // Set Co-Partner client ie. Default / BBH / Atomic	
		$client 		= (string)$creativesXML-> client; 			// eg. "Audi";
		$title 			= (string)$creativesXML-> campaign; 			// eg. "Approved  Used";
		$version		= (string)$creativesXML-> version; 			// eg. "Standard HTML5";
		$clickTag 		= (string)$creativesXML-> clicktag; 			// eg. "http://www.audi.co.uk/audi/used-cars/audi-approved-used.html"; // Click Through
		$developer		= (string)$creativesXML-> developer	;		// eg. "Lee Redmond"; // name
		$role			= (string)$creativesXML-> role	;			// eg. "HTML5 Animation"; // role
		$swfPrefix 		= (string)$creativesXML-> prefix;			// eg. "audi_approved_used_";
		
		$bannerList  	= array ();
	
		foreach($creativesXML->creatives->children() as $creative) {
		  	// echo $child->creatives->getName() . ": " . $child . "<br>";
			$newCreative = (string)$creative;
			// echo $newCreative . "<br />";
			$newCreative = (string)$creative;
			array_push ($bannerList, $newCreative);
		}
		
		

	
		// **** DO NOT CHANGE ANYTHING BELOW THIS LINE ****	
		// --------------------------------------------------------------------------------------------------------------
		// Logo setting and additional graphics:
		
		$logo			= array("Default" 			=> "/pixel/preview-assets/space66logo.gif",
								"Space66"			=> "/pixel/preview-assets/space66logo.gif",
								"BBH"				=> "/pixel/preview-assets/pxbbhlogo.gif",
								"Atomic"			=> "/pixel/preview-assets/pxatomic.gif",
								"Thisissnowbiz"		=> "/pixel/preview-assets/pxatomic.gif",
								"Wellcom"			=> "/pixel/preview-assets/wellcomlogo.gif"
						);
				
		$logo			= $logo[$coPartner];
		
		$exclamation	= "/pixel/preview-assets/exclamation.gif";	
		
		
		// --------------------------------------------------------------------------------------------------------------
		// Set Cookie for preview mode ie Flash or Backup:
		
		$mode =	 "html5"; // $_GET['mode'];
		if ($mode == "flash" || $mode == NULL) $modeValue = "flash";
		if ($mode == "backup") $modeValue = "backup";
		if ($mode == "html5") $modeValue = "html5";
		setcookie("PreviewMode",$modeValue, time()+3600*24);

		// --------------------------------------------------------------------------------------------------------------
		// Get format of the creative:		
		
		$format = $_GET["format"];
		if (!$format) $format = $bannerList[0];
		$dimensions 	= preg_match("/\d{2,}[x]\d{2,}/", $format, $size); // regular expression looking for dimension ie 120x600, 728x90, 300x250, etc
		$xPos 			= strpos($size[0], "x");
		$swfW 			= 902; // $xPos ? substr($size[0], 0, $xPos) : "300";
		$swfH 			= 302; // $xPos ? substr($size[0], $xPos+1) : "250";
		
		/*
		echo "<p>format 	= " . $format . "</p>";
		echo "<p>swfW 		= " . $swfW . "</p>";
		echo "<p>swfH 		= " . $swfH . "</p>";
		echo "<p>filename 	= " . $swfPrefix . $format . "</p>";
		*/
		
		// --------------------------------------------------------------------------------------------------------------
		// Set values for the dropdown:	
				
		$formatLinkStr = "";
		foreach($bannerList as $f)
		{
			if ($f == $format) 
			{ 
				// Current creative
				$backupPrefix	= $swfPrefix . $f; // echo "backupPrefix  = " . $backupPrefix;
				$formatLinkStr .= "<option value='index.php?format=$f&mode=$modeValue' selected>$f</option>";
			}
			else $formatLinkStr .= "<option value='index.php?format=$f&mode=$modeValue'>$f</option>";
		}
		
		// --------------------------------------------------------------------------------------------------------------
		// Check for backup file extension
		
		$backupGIF 		= $backupPrefix. ".gif";
		$backupJPG 		= $backupPrefix. ".jpg";
		$backupPNG 		= $backupPrefix. ".png";
	
		
		$backupFiles	= array ($backupGIF , $backupJPG, $backupPNG);
		
		// $bBackupExists
		
		foreach($backupFiles as $filename)
		{
			// echo $filetype;
			if ($data = @getimagesize($filename ) && $filename == $backupPrefix. ".gif" ) {$backupSuffix	= ".gif"; /* echo "its a gif" */ ;}
			if ($data = @getimagesize($filename ) && $filename == $backupPrefix. ".jpg" ) {$backupSuffix	= ".jpg"; /* echo "its a jpg" */ ;}
			if ($data = @getimagesize($filename ) && $filename == $backupPrefix. ".png" ) {$backupSuffix	= ".png"; /* echo "its a png" */ ;}
		}
			
	?>

<!doctype html>
    <!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
    <!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
    <!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
    <!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
	<head>
		<title><?php echo $client . " | " . $title ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        
        <!-- CSS -------------------------------------------------------------- -->
        
		<link rel="stylesheet" type="text/css" href="css/creative-preview.css" />

		<style type="text/css">
			
			#flash			{}
			#backup			{}
			#dev 			{ /*display:none; */ }
			iframe			{ border:none; margin:0; }
			
			
        </style>
        
        <!-- JS -------------------------------------------------------------- -->
		
		<script src="/pixel/preview-assets/swfobject.js" type="text/javascript"></script>
        <script type="text/javascript">
			// SWFObject
			//<![CDATA[
			swfobject.embedSWF('<?php echo $swfPrefix, $format, ".swf" ?>','flash','<?php echo $swfW ?>','<?php echo $swfH ?>','9.0.0','','',{flashVars:'clickTag=<?php echo $clickTag ?>'});
			
			//]]>
		</script>
        
        <script type="text/javascript">
		
			var idFooter =	document.getElementById("footer");
		
			var myVar;

				myVar = setInterval(alertFunc, 50);
			
			
			function alertFunc() {
				console.log ("Hello!");
			}
		
		</script>
        
        
	</head>
    
	<body>
    	
       <!-- HEADER -------------------------------------------------------------- -->
    
        <div id="header">
        
        	
            
            
            <div id="title"><?php echo $client ?></div>
            <div id="desc">
                <span class="info">Description: <b><?php echo $title ?></b>&nbsp;&nbsp;&nbsp;<span class="iota">&Iota;</span>&nbsp;&nbsp;</span>
                <span class="info">Version: <b><?php echo $version ?></b>&nbsp;&nbsp;&nbsp;<span class="iota">&Iota;</span>&nbsp;&nbsp;</span>
                <span class="info">Example: <b><form id="selector"><select name="dropdown" id="dropdown"><?php echo $formatLinkStr ?></select></form></b>&nbsp;&nbsp;<span class="iota">&Iota;</span>&nbsp;&nbsp;
                
				<!-- Get file size of creative -->
				<?php
				 	
					 $bannerSWF				= $swfPrefix. $format . ".swf";
					 $bannerBackup			= $swfPrefix. $format . $backupSuffix;
					 $bannerHTML5			=  $swfPrefix. $format;
					 
					 $nFlashExists 			=  file_exists($bannerSWF);
					 $nBackupExists 		=  file_exists($bannerBackup);
					 $nHTML5Exists 			=  file_exists($swfPrefix. $format);
					
					
					
					if($modeValue == 'flash' && $nFlashExists == 1) // Is this in Flash mode and does Flash Exist
					{
						$filename			= $swfPrefix. $format . ".swf";
						$fileSize 			= round (filesize($filename)/1024, 2) . 'kb';
						$modificationDate	= getModificationDate($filename);
					} 
					else if($modeValue == 'backup' && $nBackupExists == 1 && $backupSuffix != "") // Is this in BAckup mode and does Backup Exist
					{
						$filename			= $swfPrefix. $format . $backupSuffix;
						$fileSize 			= round (filesize($filename)/1024, 2) . 'kb';
						$modificationDate	= getModificationDate($filename);

					} 
					else if($modeValue == 'html5' && $nBackupExists == 1) // Does HTML5 exist
					{
						$filename			= $swfPrefix. $format;
						$directorySize 		= dirsize ($filename);
						$fileSize 			= round ($directorySize/1024, 2) . 'kb';
						$modificationDate	= getModificationDate($filename);

					}
					else
					{
						$fileSize 			= 'n/a'; // No Flash, No Backup or no HTML5! - n/a
						$modificationDate	= "n/a";
					}
					
					// ------------------------------------------------------------
					// Get Modification Date Stamp
					// ------------------------------------------------------------
					
					function getModificationDate ($fileName) {
						
						// Get Modification Date format
						// $modDate			= date ("F d Y H:i:s", filemtime($fileName));
						// $modDate			= date ("Y-m-d H:i", filemtime($fileName));
						$modDate			= date ("d-M-Y H:i", filemtime($fileName));
						
					

						return  $modDate;
						
						
					}
					
					
					// ------------------------------------------------------------
					// Get Directory Content Size
					// ------------------------------------------------------------
					
					function dirsize($dir)
					{
					  @$dh = opendir($dir);
					  $size = 0;
					  while ($file = @readdir($dh))
					  {
						if ($file != "." and $file != "..") 
						{
						  $path = $dir."/".$file;
						  if (is_dir($path))
						  {
							$size += dirsize($path); // recursive in sub-folders
						  }
						  elseif (is_file($path))
						  {
							$size += filesize($path); // add file
						  }
						}
					  }
					  @closedir($dh);
					  return $size;
					}
									
					// ------------------------------------------------------------
					
					
					function getUrl() {
					  $url  = @( $_SERVER["HTTPS"] != 'on' ) ? 'http://'.$_SERVER["SERVER_NAME"] :  'https://'.$_SERVER["SERVER_NAME"];
					  $url .= ( $_SERVER["SERVER_PORT"] !== 80 ) ? ":".$_SERVER["SERVER_PORT"] : "";
					  $url .= $_SERVER["REQUEST_URI"];
					  return $url;
					}
					
					
					
									
				?>
				
             
                <?php 
				
				
				
				?>
           
           
           
           
           
            </div>
            
            <script>
				// Drop down menu redirects
				var urlmenu = document.getElementById( 'dropdown' );
				urlmenu.onchange = function() {
					  window.location.assign(this.options[ this.selectedIndex ].value);
				};
			</script>
         
            
        </div> <!-- End of #header -->
        
       <hr />
       
       <!-- CONTENT -------------------------------------------------------------- -->
       
       <div id="content">
        
         
       <!-- Switch out content-->
       
       <?php
          
          // --------------------------------------------------
          // Check for FLASH MODE
          // --------------------------------------------------
		  
		  $swfBanner		= $swfPrefix. $format . ".swf";
		  $swfBackup		= $swfPrefix. $format . $backupSuffix;
		  
		  $bFlashExists 	=  file_exists($swfBanner);
		  $bBackupExists 	=  file_exists($swfBackup);
		  
		
		  
		  
		  
		  if($modeValue == 'flash'){
							  
				if ($bFlashExists == 1 || $bBackupExists == 1 ) {
					
					if ($bFlashExists == 1) {
							echo "<div id='flash'>" ;
								if ($bBackupExists == 1) {
									echo "<p><img src='" . $exclamation . "' width='40' height='35' alt='!' /></br></br>Oops! Flash plugin is not available.</p>";
									echo "<img src='" .  $swfBackup . "' width='". $swfW ."' height='". $swfH ."' alt='backup' />";
								} else {
									echo "<p><img src='" .  $exclamation . "' width='40' height='35' alt='!' /></br></br>Oops! Flash and Backup previews are not available for this creative.</p>";
								}
							echo "</div>";
					}
					
					elseif ($bBackupExists == 1) {
							echo  "<p><img src='" . $exclamation . "' width='40' height='35' alt='!' /></br></br>Flash preview is not available for this creative.</p>";
							
							if ($backupSuffix != "") {
								echo "<img src='" . $swfBackup . "' width='". $swfW ."' height='". $swfH ."' alt='backup' />";
							}
					}
			  
				} else
				{
					echo  "<p><img src='" . $exclamation . "' width='40' height='35' alt='!' /></br></br>Oops! Flash and Backup previews are not available for this creative.</p>";
				}
		  
		  }
		  
		  // --------------------------------------------------
          // Check for BACKUP MODE
          // --------------------------------------------------
		  
		if($modeValue == 'backup'  ){
		
			$backupBanner = $swfPrefix. $format . $backupSuffix;
			
			// echo "$backupSuffix = " + $backupSuffix;
			// echo "format	= " + $swfPrefix;
			
			if (file_exists($backupBanner) && $backupSuffix != "") {
					echo
					"<div id='backup'> 
					<img src='" .  $swfPrefix . $format . $backupSuffix . "' width='". $swfW ."' height='". $swfH ."' alt='backup' /> 
					</div>";				  
				
			 } else {
					echo "<p><img src='" . $exclamation . "' width='40' height='35' alt='!' /></br></br>Oops! Backup preview is not available for this creative.</p>";
					/* echo "<p>$backupBanner</p>"; */
			}
		
		}
		
		// --------------------------------------------------
        // Check for HTML5 MODE
       	// --------------------------------------------------
		
		if($modeValue == 'html5'){
			
			$html5banner		= $swfPrefix. $format;
	
			if (file_exists($html5banner)) {
					echo "<iframe src='" . $html5banner . "/index.html' align='center' width='". $swfW ."' height='". $swfH ."'></iframe>";
				  
				
			 } else {
					echo "<p><img src='" . $exclamation . "' width='40' height='35' alt='!' /></br></br>Oops! HTML5 preview is not available for this creative.</p>";
					/* echo "<p>$backupBanner</p>"; */
			}
			
			
			
			
			
			
		}
		
		
			  
      ?>
      
    
      
      
      <?php

	
		
	?>
    
     
       </div> <!-- End of #content -->
        
       <!-- DEVELOPMENT PANEL -------------------------------------------------------------- -->

         <div id="dev"> 
       		<p>banner name: <?php echo $swfPrefix. $format.$backupSuffix ?></p>
            <p>width: <?php echo $swfW ?></p>
            <p>height: <?php echo $swfH ?></p>
            <?php
				
				$filename = $swfBanner;
				$fileSize = round (filesize($filename)/1024, 2);
				echo $fileSize.'kb';
			
			?>
            
            
       </div> <!-- End of Development panel -->
       
       <!-- FOOTER -------------------------------------------------------------- -->
       
       <div id="footer">
            
           
          
            
       </div> <!-- End of footer -->
       
     
    
    	
    </body>
</html>
