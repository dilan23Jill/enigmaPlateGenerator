import os
import time

## input file name via CMD arguments:
#inputFileName = str(sys.argv[1])
## static input file name:

elapsed_time = 0
inputFileName = 'plates.pdf'
svgFileName = 'plates.svg'
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
        print("End")
    
else:
    raise ValueError("%s isn't a file!" % inputFileName)