import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {searchTree} from '../../actions/TreeActions';
import LiItem from './LiItem';

class TreeView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      search:""
    };
    this.searchChange = this.searchChange.bind(this);
    this.searchText = this.searchText.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  componentDidMount () {
    this.props.searchTree('');
  }

  searchChange(e) {
    this.setState({ search: e.target.value });
  }

  searchText(){
    this.props.searchTree(this.state.search.toLowerCase());
  }

  

  filterData(tree,search,treeData=[],that){
    
    if(!tree || search == ''){
      return treeData;
    }

    Object.values(tree).forEach(function(item){
      
      if(item.node.description.match(search)){
        treeData.push(item.node.id);
      }
      
      if(item.node.children.length > 0){
        that.filterData(item.node.children,search,treeData,that);
      }
    });
  }

  render() {
    let treesFiltered = this.filterData(this.props.trees,this.state.search,[],this);
    let trees = this.props.trees;
    return (
      <div>
        <div>
          <h1>Search</h1>
          <input type="text" placeolder="Search" onChange={this.searchChange} />
          <input type="button" value ="Search" onClick={this.searchText}/>
        </div>
        <div>
          <ul>
            {this.props.trees.length > 0 && (
              this.props.trees.map((item, id) => <LiItem key={id} treedata={item} treesFiltered={treesFiltered} />)
            )}
          </ul>
        </div>
      </div>
    );
  }
}

TreeView.propTypes = {
  searchTree:PropTypes.func,
  trees: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    trees: state.trees.tree
  };
}

export default connect(mapStateToProps, {searchTree})(TreeView);