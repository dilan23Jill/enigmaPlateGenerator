import os
import time
from urllib import request
from pathlib import Path
## input file name via CMD arguments:
#inputFileName = str(sys.argv[1])
## static input file name:

elapsed_time = 0
inputFileName = 'plates.pdf'
svgFileName = 'plates.svg'

remote_url_pdf = 'http://10.1.50.150/temp/plates.pdf'
remote_url_svg = 'http://10.1.50.150/temp/download.svg'

local_file_pdf = str(Path.home() / "Downloads")+'/plates.pdf'
local_file_svg = str(Path.home() / "Downloads")+'/plates.svg'

os.chdir('temp')

while not os.path.exists(inputFileName):
    time.sleep(1)

if os.path.isfile(inputFileName):
    try:
        inkConCmd = 'inkscape --actions="select-all;object-to-path" --export-filename=' + inputFileName + ' ' + inputFileName
        inkConCmd = 'inkscape --actions="select-all;object-to-path" --export-filename=' + svgFileName + ' ' + inputFileName
        os.system(inkConCmd)
    except OSError as err:
        print("OS Error:" + err)
    finally:
        request.urlretrieve(remote_url_pdf, local_file_pdf)
        request.urlretrieve(remote_url_svg, local_file_svg)
        #os.remove(remote_url_svg) <- windows path
        #os.remove(local_file_pdf) <- windows path
        print("End")
    
else:
    raise ValueError("%s isn't a file!" % inputFileName)