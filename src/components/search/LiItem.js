/* eslint-disable react/wrap-multilines */
import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {searchTree} from '../../actions/TreeActions';

class LiItem extends React.Component {
  render () {
    let html = "";
    let treesFiltered = this.props.treesFiltered;
    if(typeof treesFiltered == "undefined"){
      treesFiltered = [];
    }

    if(this.props.treedata.node.children.length > 0 
      && this.props.treedata.node.description.match(this.props.search) 
      && ( Object.values(treesFiltered).length == 0 || Object.values(treesFiltered).indexOf(this.props.treedata.node.id) > -1 )){
      
      
      html = <li>
        {this.props.treedata.node.description}
        {
         this.props.treedata.node.children.length > 0 &&
         this.props.treedata.node.children.filter(child => child.node.description.match(this.props.search) 
          || this.props.search.match(child.node.description)).length > 0 && (
          <ul>
            {
              this.props.treedata.node.children.filter(child => child.node.description.match(this.props.search) )
                .map((child, id) => <LiItem key={id} treedata={child} />)
            }
          </ul>
        )}
      </li>;
    }else if( this.props.treedata.node.description.match(this.props.search) && (treesFiltered == [] || Object.values(treesFiltered).indexOf(this.props.treedata.node.id) == -1)){
      html = <li>
      {this.props.treedata.node.description}
      </li>;
    }else if(this.props.treedata.node.children.length > 0){
      
      html = <li className="noDisc">
        {
         this.props.treedata.node.children.length > 0 &&
         this.props.treedata.node.children.filter(child => child.node.description.match(this.props.search) 
          || this.props.search.match(child.node.description)).length > 0 && (
          <ul>
            {
              this.props.treedata.node.children.filter(child => child.node.description.match(this.props.search) )
                .map((child, id) => <LiItem key={id} treedata={child} />)
            }
          </ul>
        )}
      </li>;
    }else{
      html = <li className="hideThis">
        {
         this.props.treedata.node.children.length > 0 &&
         this.props.treedata.node.children.filter(child => child.node.description.match(this.props.search) 
          || this.props.search.match(child.node.description)).length > 0 && (
          <ul>
            {
              this.props.treedata.node.children.filter(child => child.node.description.match(this.props.search) )
                .map((child, id) => <LiItem key={id} treedata={child} />)
            }
          </ul>
        )}
      </li>;
    }
    return html;
  }
}

LiItem.propTypes = {
  treedata: PropTypes.object,
  treesFiltered: PropTypes.array,
  search: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    search: state.trees.search
  };
}

export default connect(mapStateToProps, {searchTree})(LiItem);
