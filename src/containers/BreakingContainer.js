import React from 'react'
import BreakingList from "../components/BrakingList";


const BreakingContainer = props =>(
    <div>
        <div id="site_breaking_container_title">
            <div id="breaking_container_title">
                <div className="row">
                    <div className="col-1">
                        <div id="site_breaking_title">
                            <span id="site_uid17">ВЫБЕРИТЕ ТИП ПОЛОМКИ</span>
                        </div>
                        <div id="site_breakingl_container_line_s">
                            <img src={ require('../images/img0004.png') } id="breakingl_container_line_s" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="site_breaking_list">
            <div id="breaking_list">
                <div className="row">
                    <div className="col-1">
                        <div id="site_CssMenu4">
                            <ul>

                              <BreakingList
                                  breakingLists = {props.breakingLists}
                                  onModelClick={props.onModelClick}
                              />

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default BreakingContainer