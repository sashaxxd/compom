import React from 'react'

const ManufacturerList = props =>(
    <>
        {props.manufacturerLists.map((list, index) => {
                return(
                    <div id="site_manufacturer_single" key={index} onClick={() => props.onManufacturerClick(list.id)}>
                        <div id="manufacturer_single">
                            <div className="row">
                                <div className="col-1">
                                    {/*<div id="site_Image6">*/}
                                    {/*<img src={ require('../images/Apple-03.png') } id="Image6" alt=""/>*/}
                                    {/*</div>*/}
                                    <div style={{fontSize: '20px', color: '#000', height: '33px'}}>{list.name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        )}
    </>
)

export default ManufacturerList
