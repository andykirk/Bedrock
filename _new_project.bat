@echo off
::@echo Arguments that contain spaces spaces must me enclosed in "".

:promptname
set /p Nm= Enter new project name (NO SPACES): 

if [%Nm%]==[] goto checkname

:promptshortname
set /p Nm_s= Enter new project short name (url-safe, lowercase, no spaces etc.): 

if [%Nm_s%]==[] goto checkshortname

:::promptdesc
::set /p Ds= Enter new project description: 

::if [%Ds%]==[] goto checkdesc

:::promptversion
::set /p Vn= Enter new project version: 

::if [%Vn%]==[] set Vn=0.0.1

:::promptrepo
::set /p Rp= Enter new project repository: 



::@echo name:%Nm%
::@echo name:%Nm% description:%Ds% version:%Vn% repo:%Rp%
::pause
::goto :eof


:: Update package.json:
powershell -Command "($file_content = (gc package.json) -replace '{{NAME}}', '"%Nm%"'); [IO.File]::WriteAllLines('package.json', $file_content)"

:: Update bower.json:
powershell -Command "($file_content = (gc bower.json) -replace '{{NAME}}', '"%Nm%"'); [IO.File]::WriteAllLines('bower.json', $file_content)"

:: Update _scripts/cookies.js:
powershell -Command "($file_content = (gc _scripts/cookies.js) -replace '{{SITE_SHORTNAME}}', '"%Nm_s%"'); [IO.File]::WriteAllLines('_scripts/cookies.js', $file_content)"

:: Update composer.json:
powershell -Command "($file_content = (gc composer.json) -replace '{{SITE_SHORTNAME}}', '"%Nm_s%"'); [IO.File]::WriteAllLines('composer.json', $file_content)"



pause
goto :eof


:checkname
@echo You must enter a name
pause
goto :promptname

:checkshortname
@echo You must enter a short name
pause
goto :promptshortname

:checkdesc
@echo You must enter a description
pause
goto :promptdesc



