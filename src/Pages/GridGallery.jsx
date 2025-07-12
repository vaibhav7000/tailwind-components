export default function GridGallery() {
    
    
    const images = ["https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80", "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80", "https://images.unsplash.com/photo-1526400473556-aac12354f3db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80", "https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80", "https://images.unsplash.com/photo-1611605645802-c21be743c321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80", "https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80", "https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80", "https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80", "https://images.unsplash.com/photo-1518892096458-a169843d7f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"]


    return (
        <div className="h-screen w-screen">
            <div className="grid grid-cols-3 auto-cols-min w-full h-full">
                <img src={images[0]} className="col-span-2" />
                <img src={images[1]} className="col-span-full" />
                <img src={images[2]} className="col-start-3 col-end-5" />
                <img src={images[3]} className="" />
                <img src={images[4]} className="" />
                <img src={images[5]} className="" />
                <img src={images[6]} className="" />
                <img src={images[7]} className="" />
                <img src={images[8]} className="" />
            </div>
        </div>
    )
}

// by default the grid-cols-* -> make an n col grid of equal size because by-default all the cols intially has 0 size and then the available space is divided into the n number of cols equally => the grid takes all the avilable space of the grid-container

// controlling how the grid-items should take the space (row-wise and columns-wise)  using -> "col-span and row-span " utilities

/*

    col-span-*(number) and row-span-*(number) -> starts naturally from their position takes n columns space and exactly end after the n cols (grid-columns: span n / span n)

    col-span-full -> grid-columns: 1 / -1 ( start at the first and end at the last one column)

    col-span-(custom-value) -> grid-columns: span customValue / span customValue

    col-span-[value] -> grid-columns: span value / span value

    col-start-*
    -col-start-*
    col-end-*
    -col-end-* 

    ( all means starts at grid-columns-start: value, grid-columns-end:  value)



    grid-col -> shorthand for setting grid-coluimns-start and grid-columns-end

*/