// Given the&nbsp; *width* of a lawn in metres, *length* of a lawn in metres and the square *metres cut per minute* **calculate the minutes** it would take to mow that lawn. Test at least 3 lawn sizes

function convertLawnSize(length, width, metres_cut_per_minute){
    let metres = length * width;
    let minutes = metres /metres_cut_per_minute
    return minutes;
}

export {convertLawnSize}