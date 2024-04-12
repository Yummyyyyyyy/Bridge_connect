<template>
	<!-- style="display:flex;" -->
    <div  class="bk1" style="display:flex; margin-top: 0;">
	
	
  	<el-card  class="bk2" shadow="always" style="width:80%;  margin: 0px auto; 
	                               " >
		    <!-- <template #header>
  		    <div class="card-header">
  		         <span>用户首页</span>
				 <span>
			     <el-button @click="goToPage('/page7')" >
					 注册</el-button>  
		   		 <el-button @click="goToPage('/page6')" >
					登陆</el-button>		
				</span>
	    </div>
		</template> -->
  		<div class="header1">
  		     <span>用户首页</span>
		</div>
		
  		<div style="height:100vh">
  			<div id="whole">
				
			
			<!-- <div style="text-align: left; margin: 30px 20%;" >
			 <el-button @click="showForm()" type="text" >
					<el-icon><search /></el-icon> 查询桥梁</el-button>
			<el-button type="text" @click="dialogVisible = true">添加桥梁</el-button>
			  </div> -->
			<!-- <el-button type="text" @click="dialogVisible = true">添加桥梁</el-button> -->
			<el-card class="box-card2" >
				
				<template #header>
				    <div class="card-header">
				         <span>查询桥梁数据</span>
						
				</div>
				</template>
			<!-- 	<div class="card-header" style="text-align: left; margin: 30px 10%;" >
				<span>
				<el-button @click="showForm()" type="text" >
						<el-icon><search /></el-icon> 查询桥梁</el-button>
				 <el-button type="primary" @click="showForm()">刷新</el-button>
				</span>
			
				<span>
				 <el-input  v-model="delete_id" style="width: 150px;"
				 placeholder="请输入删除的桥梁id"></el-input>
				  <el-button type="danger" @click="Delete1()">删除</el-button>
				</span>
				  </div> -->
				   <div>
				 <!-- <el-input  v-model="change_id" style="width: 150px;"
					placeholder="请输入修改的桥梁id"></el-input>
				<el-button type="danger" @click="change1()">修改</el-button> -->
					   
				   </div>
				<!--  <div style=" margin:20px 20%;
                         font-size: 30px;">
					  用户输入的桥梁数据
				  </div> -->
<!-- 表格 -->
			 <div>
						
				 <el-table :data="tableData" style="width: 100%"  
								           :row-class-name="tableRowClassName">
			      <el-table-column prop="桥梁id" label="桥梁ID"></el-table-column>
			      <el-table-column prop="定期检查时间" label="定期检查时间"></el-table-column>
			      <el-table-column prop="工作时间" label="工作时间"></el-table-column>
			      <el-table-column prop="年日均交通量" label="年日均交通量"></el-table-column>
			      <el-table-column prop="建成时间" label="建成时间"></el-table-column>
			      <el-table-column prop="上下行" label="上下行"></el-table-column>
			      <el-table-column prop="是否预应力桥梁" label="是否预应力桥梁"></el-table-column>
				 <!--  <el-table-column prop="桥梁等级" label="桥梁等级"></el-table-column> -->
				  <el-table-column style="width: 70px" label="操作">
				        <el-button  type="primary" @click="handleEdit()">+</el-button>
				       <el-button  type="danger" @click="handleDelete()">-</el-button> 
				  </el-table-column>
			    </el-table>
			
			  </div>
			  <div class="card-header" style="text-align: left; margin: 30px 5%;" >
			  <span>
			 <!-- <el-button @click="showForm()" type="text" >
			  		<el-icon><search /></el-icon> 查询桥梁</el-button> -->
			   <el-button type="primary" @click="showForm()">刷新数据</el-button>
			  </span>
			  			
			  <span>
			   <el-input  v-model="delete_id" style="width: 150px;"
			   placeholder="请输入删除的桥梁id"></el-input>
			    <el-button type="danger" @click="Delete1()">删除</el-button>
			  </span>
			    </div>
			 </el-card>
			<!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
			 
			 <el-dialog
			   title="添加桥梁"
			   v-model="dialogVisible"
			   width="60%"
			   :before-close="handleClose">
=
			   <el-card class="box-card" >
			       <el-form
			       		        ref="ruleFormRef"
			       		        :model="ruleForm"
			       		        status-icon
			       		        :rules="rules"
			       		        label-width="140px"
			       		        class="demo-ruleForm"
			       		      >
			       	<el-menu
			       	    :default-active="activeIndex"
			       	    class="el-menu-demo"
			       	    mode="horizontal"
			       	    @select="handleSelect"
			       	  >
			       	    <el-menu-item index="1" >桥梁基本信息</el-menu-item>
			       		<el-menu-item index="2">桥梁病害信息</el-menu-item>
			       
			       	  </el-menu>
			   		 
			          <div >
	
			   	    <el-form-item label="桥梁id：" prop="bridge_id" >
			   	    	         <el-input
			   	    	            v-model="ruleForm.bridge_id"
			   	    	            autocomplete="off"
			   	    				></el-input>
			   	    	        </el-form-item>
			       	<el-form-item label="定期检查时间：" prop="checktime" >
			       		         <el-input
			       		            v-model="ruleForm.checktime"
			       		            autocomplete="off"
			       					></el-input>
			       		        </el-form-item>
			           <el-form-item label="建成时间：" prop="buildtime" >
			       		          <el-input
			       		            v-model="ruleForm.buildtime"
			       		            autocomplete="off"
			       		          ></el-input>
			       	</el-form-item>
			       	<el-form-item label="年日均交通量：" prop="traffic" >
			       		          <el-input
			       		            v-model="ruleForm.traffic"
			       		            autocomplete="off"
			       		          ></el-input>
			       	</el-form-item>
			       	<el-form-item label="上下行：" prop="shangxiahang" >
			       		          <el-input
			       		            v-model="ruleForm.shangxiahang"
			       		            type="number"
			       		            autocomplete="off"
			       		          ></el-input>
			       	</el-form-item>
			       	<el-form-item label="是否预应力桥梁：" prop="force" >
			       		          <el-input
			       		            v-model="ruleForm.force"
			       		            type="number"
			       		            autocomplete="off"
			       		          ></el-input>
			       	</el-form-item>
			   		<div style="text-align: center;" >
<!-- 			   		<el-button class="btnGroup" type="primary"  @click="addForm('ruleForm')">添加桥梁信息</el-button> -->
			   		     <el-button class="btnGroup" type="primary" 
						  @click="addForm('ruleForm')">添加桥梁信息</el-button>
					</div>
			    </div>
			         </el-form>
			   	</el-card>
				
			   <span slot="footer" class="dialog-footer">
			     <el-button @click="dialogVisible = false">取 消</el-button>
			     <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			   </span>
			 </el-dialog>
			 
		<div style="display: flex;"> 
	       <el-card class="box-card" >
			   <template #header>
			       <div class="card-header">
			            <span>添加桥梁数据</span>
			   		
			   </div>
			   </template>
			    <el-form
			    		        ref="ruleFormRef"
			    		        :model="ruleForm"
			    		        status-icon
			    		        :rules="rules"
			    		        label-width="140px"
			    		        class="demo-ruleForm"
			    		      >
			    	<el-menu
			    	    :default-active="activeIndex"
			    	    class="el-menu-demo"
			    	    mode="horizontal"
			    	    @select="handleSelect"
			    	  >
			    	    <el-menu-item index="1" >桥梁基本信息</el-menu-item>
			    		<el-menu-item index="2" @click="dialogVisible2 = true">桥梁病害信息</el-menu-item>
			    
			    	  </el-menu>
					 
			       <div >
			 
				  <el-form-item label="桥梁id：" prop="bridge_id" >
				    	         <el-input
				    	            v-model="ruleForm.bridge_id"
				    	            autocomplete="off"
				    				></el-input>
				    	        </el-form-item>
			    	<el-form-item label="定期检查时间：" prop="checktime" >
			    		         <el-input
			    		            v-model="ruleForm.checktime"
			    		            autocomplete="off"
			    					></el-input>
			    		        </el-form-item>
			        <el-form-item label="建成时间：" prop="buildtime" >
			    		          <el-input
			    		            v-model="ruleForm.buildtime"
			    		            autocomplete="off"
			    		          ></el-input>
			    	</el-form-item>
			    	<el-form-item label="年日均交通量：" prop="traffic" >
			    		          <el-input
			    		            v-model="ruleForm.traffic"
			    		            autocomplete="off"
			    		          ></el-input>
			    	</el-form-item>
			    	<el-form-item label="上下行：" prop="shangxiahang" >
			    		          <el-input
			    		            v-model="ruleForm.shangxiahang"
			    		            type="number"
			    		            autocomplete="off"
			    		          ></el-input>
			    	</el-form-item>
			    	<el-form-item label="是否预应力桥梁：" prop="force" >
			    		          <el-input
			    		            v-model="ruleForm.force"
			    		            type="number"
			    		            autocomplete="off"
			    		          ></el-input>
			    	</el-form-item>
					<el-form-item label="等级：" prop="grade" >
						          <el-input
						            v-model="ruleForm.grade"
						            autocomplete="off"
						          ></el-input>
					</el-form-item>
					<div style="text-align: center;" >
					<el-button class="btnGroup" type="primary"  @click="dialogVisible2 = true">下一步</el-button>
					<el-button class="btnGroup" type="primary"  @click="addForm('ruleForm')">提交</el-button>
					</div>
			    	</div>
			      </el-form>
				   </el-card> 
		<!-- 修改数据		   -->
				    <el-card class="box-card" >
						<template #header>
						    <div class="card-header">
						         <span>修改桥梁数据</span>	
						</div>
						</template>
						<el-form
								        ref="ruleFormRef"
								        :model="ruleForm"
								        status-icon
								        :rules="rules"
								        label-width="140px"
								        class="demo-ruleForm"
								      >		 
						  <el-form-item label="桥梁id：" prop="change_id" >
						    <el-input  v-model="change_id" 
							placeholder="请输入修改的桥梁id"></el-input>    
						    	        </el-form-item>
						<el-form-item label="修改字段：" prop="change_ziduan" >
						  <el-input  v-model="change_ziduan" 
								placeholder="请输入修改的字段"></el-input>    
						  	        </el-form-item>
						<el-form-item label="修改后的值：" prop="change_thing" >
						<el-input  v-model="change_thing" 
								placeholder="请输入修改的值"></el-input>    
							        </el-form-item>
						  </el-form>
						<div style="text-align: center;" >
						<el-button class="btnGroup" type="primary" @click="change1()">确定修改</el-button>
					    </div>
						</el-card>
					</div>
					<div style="height:20vh">
						</div>
			</div>
<!--   添加桥梁病害信息 -->
			<el-dialog
						   title="添加桥梁病害信息"
						   v-model="dialogVisible2"
						   width="50%"
						   :before-close="handleClose">
			
				 <el-card style="width:50% ;  margin:auto auto" >
				<div>
				<!-- 	<el-row class="tac">
					    <el-col :span="10"> -->
					 <el-menu
					        default-active="2"
					        class="el-menu-vertical-demo"
					        @open="handleOpen"
					        @close="handleClose">
					        <el-menu-item index="2" class="formleft"  @click="iner = true">
					          <span>伸缩缝混凝土开裂</span>
					        </el-menu-item>
					        <el-menu-item index="3" class="formleft" @click="iner2 = true">
					          <span>墩台裂缝</span>
					        </el-menu-item>
					        <el-menu-item index="4" class="formleft" @click="iner3= true" >梁体钢筋锈蚀</el-menu-item>
							<el-menu-item index="5" class="formleft" @click="iner4 = true">支座变形</el-menu-item>
							<el-menu-item index="6" class="formleft" @click="iner5 = true">支座开裂</el-menu-item>
							<el-menu-item index="7" class="formleft" @click="iner6 = true">支座脱空</el-menu-item>
							<el-menu-item index="8" class="formleft" @click="iner7 = true">梁体底板横向裂缝</el-menu-item>
							<el-menu-item index="9" class="formleft" @click="iner8 = true">梁体底板混凝土破损</el-menu-item>
							<el-menu-item index="10" class="formleft" @click="iner9 = true">梁体底板纵向裂缝</el-menu-item>
							<el-menu-item index="11" class="formleft" @click="iner10 = true">梁体腹板竖向裂缝</el-menu-item>
							<el-menu-item index="12" class="formleft" @click="iner11 = true">梁体翼板横向裂缝</el-menu-item>
							<el-menu-item index="13" class="formleft" @click="iner12 = true">墩台钢筋腐蚀</el-menu-item>
					      </el-menu>
				<!-- 	</el-col>
					<el-col :span="10" style="margin-left:15px;" >
		 -->
					
					<el-dialog v-model="iner"
					title="伸缩缝混凝土开裂"
					width="50%"
					>
					<el-card >
						<el-form
						        
						        style="margin:30px auto;"
							    label-width="180px"
							    class="demo-ruleForm"
							  >
						<el-form-item label="缩缝混凝土开裂跨径: ">
						     <el-input v-model="kuai"></el-input>
						   </el-form-item>
						 <el-form-item label="平均数量: ">
						      <el-input v-model="averageCount"></el-input>
						    </el-form-item>
						    <el-form-item label="平均面积: ">
						      <el-input v-model="averageArea"></el-input>
						    </el-form-item>
						    <el-form-item label="总面积: ">
						      <el-input v-model="totalArea"></el-input>
						    </el-form-item>
						    <el-form-item label="数量: ">
						      <el-input v-model="count"></el-input>
						    </el-form-item>
						    <el-form-item label="最大面积: ">
						      <el-input v-model="maxArea"></el-input>
						    </el-form-item>
						</el-form>
					</el-card>
				     </el-dialog>
		<!-- 填写墩台裂缝			 -->
					<el-dialog v-model="iner2"
					title="墩台裂缝"
					width="50%"
					>
					<el-card >
						<el-form
						        style="margin:30px auto;"
							    label-width="180px"
							    class="demo-ruleForm" >

						<el-form-item label="墩台裂缝跨径: ">
						     <el-input v-model="kuai2"></el-input>
						   </el-form-item>
						    <el-form-item label="平均宽度（m）">
						           <el-input v-model="averageWidth2"></el-input>
						       </el-form-item>
						       <el-form-item label="平均数量">
						           <el-input v-model="averageCount2"></el-input>
						       </el-form-item>
						       <el-form-item label="平均长度（cm）">
						           <el-input v-model="averageLength2"></el-input>
						       </el-form-item>
						       <el-form-item label="数量">
						           <el-input v-model="count2"></el-input>
						       </el-form-item>
						       <el-form-item label="最大宽度（m）">
						           <el-input v-model="maxWidth2"></el-input>
						       </el-form-item>
						       <el-form-item label="最大长度（cm）">
						           <el-input v-model="maxLength2"></el-input>
						       </el-form-item>
						       <el-form-item label="长度总和（cm）">
						           <el-input v-model="totalLength2"></el-input>
						       </el-form-item>
					
						</el-form>
					</el-card>
					</el-dialog>

			<el-dialog v-model="iner3"
			title="梁体钢筋锈蚀"
			width="50%"
			>
			<el-card >
				<el-form
				        style="margin:30px auto;"
					    label-width="180px"
					    class="demo-ruleForm" >
				<el-form-item label="梁体钢筋锈蚀跨径: ">
				     <el-input v-model="kuai3"></el-input>
				   </el-form-item>
				       <el-form-item label="平均数量">
				           <el-input v-model="averageCount3"></el-input>
				       </el-form-item>
				       <el-form-item label="平均长度:">
				           <el-input v-model="averageLength3"></el-input>
				       </el-form-item>
				       <el-form-item label="数量">
				           <el-input v-model="count3"></el-input>
				       </el-form-item>
				   
				       <el-form-item label="最大长度:">
				           <el-input v-model="maxLength3"></el-input>
				       </el-form-item>
				       <el-form-item label="长度总和:">
				           <el-input v-model="totalLength3"></el-input>
				       </el-form-item>
			
				</el-form>
			</el-card>
			</el-dialog>
<!-- 			"支座变形跨径","平均数量","数量" -->
			<el-dialog v-model="iner4"
			title="支座变形"
			width="50%"
			>
			<el-card >
				<el-form
				        style="margin:30px auto;"
					    label-width="180px"
					    class="demo-ruleForm" >
				<el-form-item label="支座变形跨径: ">
				     <el-input v-model="kuai4"></el-input>
				   </el-form-item>
				       <el-form-item label="平均数量:">
				           <el-input v-model="averageCount4"></el-input>
				       </el-form-item>
				       <el-form-item label="数量:">
				           <el-input v-model="count4"></el-input>
				       </el-form-item>
				</el-form>
			</el-card>
			</el-dialog>
				
<!-- 			"支座开裂跨径","宽度总和_mm_field","平均宽度_mm_field","平均数量","平均长度_cm_field",
			"数量","最大宽度_mm_field","最大长度_cm_field","长度总和_cm_field"	 -->
			<el-dialog v-model="iner5"
			title="支座开裂"
			width="50%"
			>
			<el-card >
				<el-form
				        style="margin:30px auto;"
					    label-width="180px"
					    class="demo-ruleForm" >
				<el-form-item label="支座开裂跨径: ">
				     <el-input v-model="kuai5"></el-input>
				   </el-form-item>
				   <el-form-item label="宽度总和:">
				          <el-input v-model="totalWidth5"></el-input>
				      </el-form-item>
				   <el-form-item label="平均宽度:">
				          <el-input v-model="averageWidth5"></el-input>
				      </el-form-item>
				       <el-form-item label="平均数量">
				           <el-input v-model="averageCount5"></el-input>
				       </el-form-item>
				       <el-form-item label="平均长度:">
				           <el-input v-model="averageLength5"></el-input>
				       </el-form-item>
				       <el-form-item label="数量">
				           <el-input v-model="count5"></el-input>
				       </el-form-item>
					   <el-form-item label="最大宽度:">
					       <el-input v-model="maxWidth5"></el-input>
					   </el-form-item>
				       <el-form-item label="最大长度:">
				           <el-input v-model="maxLength5"></el-input>
				       </el-form-item>
				       <el-form-item label="长度总和:">
				           <el-input v-model="totalLength5"></el-input>
				       </el-form-item>
			
				</el-form>
			</el-card>
			</el-dialog>
<!-- 			支座脱空 支座脱空跨径","平均数量","数量"},-->
			
			<el-dialog v-model="iner6"
			title="支座脱空"
			width="50%"
			>
			<el-card >
				<el-form
				        style="margin:30px auto;"
					    label-width="180px"
					    class="demo-ruleForm" >
				<el-form-item label="支座脱空跨径: ">
				     <el-input v-model="kuai6"></el-input>
				   </el-form-item>
				       <el-form-item label="平均数量:">
				           <el-input v-model="averageCount3"></el-input>
				       </el-form-item>
				       <el-form-item label="数量:">
				           <el-input v-model="count3"></el-input>
				       </el-form-item>
				</el-form>
			</el-card>
			</el-dialog>
		<!-- 	
			"bridge_id","梁体底板横向裂缝跨径","宽度总和_mm_field",
			"平均宽度_mm_field","平均数量",
			"平均长度_cm_field","数量","最大宽度_mm_field","最大长度占比",
			"每延米数量","长度总和_cm_field"},
			 -->
		<el-dialog v-model="iner7"
					title="梁体底板横向裂缝"
					width="50%"
					>
					<el-card >
						<el-form
						        style="margin:30px auto;"
							    label-width="180px"
							    class="demo-ruleForm" >
						<el-form-item label="梁体底板横向裂缝跨径: ">
						     <el-input v-model="kuai7"></el-input>
						   </el-form-item>
						   <el-form-item label="宽度总和:">
						          <el-input v-model="totalWidth7"></el-input>
						      </el-form-item>
						   <el-form-item label="平均宽度:">
						          <el-input v-model="averageWidth7"></el-input>
						      </el-form-item>
						       <el-form-item label="平均数量">
						           <el-input v-model="averageCount7"></el-input>
						       </el-form-item>
						       <el-form-item label="平均长度:">
						           <el-input v-model="averageLength7"></el-input>
						       </el-form-item>
						       <el-form-item label="数量">
						           <el-input v-model="count7"></el-input>
						       </el-form-item>
							   <el-form-item label="最大宽度:">
							       <el-input v-model="maxWidth7"></el-input>
							   </el-form-item>
						       <el-form-item label="长度总和:">
						           <el-input v-model="totalLength7"></el-input>
						       </el-form-item>
							   <el-form-item label="最大长度占比:">
							       <el-input v-model="Lengthper7"></el-input>
							   </el-form-item>
							   <el-form-item label="每延米数量:">
							       <el-input v-model="countperm7"></el-input>
							   </el-form-item>
						</el-form>
					</el-card>
					</el-dialog>	
<!-- 		BeamBaseplateConcreteCracking":{"bridge_id","梁体底板混凝土破损跨径","平均数量",
		"平均面积_m2_field","总面积_m2_field","数量","最大面积_m2_field"},		 -->
		<el-dialog v-model="iner8"
		title="梁体底板混凝土破损"
		width="50%"
		>
		<el-card >
			<el-form
			        
			        style="margin:30px auto;"
				    label-width="180px"
				    class="demo-ruleForm"
				  >
			<el-form-item label="梁体底板混凝土破损跨径: ">
			     <el-input v-model="kuai8"></el-input>
			   </el-form-item>
			 <el-form-item label="平均数量: ">
			      <el-input v-model="averageCount8"></el-input>
			    </el-form-item>
			    <el-form-item label="平均面积: ">
			      <el-input v-model="averageArea8"></el-input>
			    </el-form-item>
			    <el-form-item label="总面积: ">
			      <el-input v-model="totalArea8"></el-input>
			    </el-form-item>
			    <el-form-item label="数量: ">
			      <el-input v-model="count8"></el-input>
			    </el-form-item>
			    <el-form-item label="最大面积: ">
			      <el-input v-model="maxArea8"></el-input>
			    </el-form-item>
			</el-form>
		</el-card>
		 </el-dialog>
<!-- 		 bridge_id","梁体底板纵向裂缝跨径","宽度总和_mm_field","平均宽度_mm_field","平均数量","平均长度_cm_field",
		 "数量","最大宽度_mm_field","最大长度占比","长度总和_cm_field"}, -->
		<el-dialog v-model="iner9"
					title="梁体底板纵向裂缝"
					width="50%"
					>
					<el-card >
						<el-form
						        style="margin:30px auto;"
							    label-width="180px"
							    class="demo-ruleForm" >
						<el-form-item label="梁体底板纵向裂缝跨径: ">
						     <el-input v-model="kuai9"></el-input>
						   </el-form-item>
						   <el-form-item label="宽度总和:">
						          <el-input v-model="totalWidth9"></el-input>
						      </el-form-item>
						   <el-form-item label="平均宽度:">
						          <el-input v-model="averageWidth9"></el-input>
						      </el-form-item>
						       <el-form-item label="平均数量">
						           <el-input v-model="averageCount9"></el-input>
						       </el-form-item>
						       <el-form-item label="平均长度:">
						           <el-input v-model="averageLength9"></el-input>
						       </el-form-item>
						       <el-form-item label="数量">
						           <el-input v-model="count9"></el-input>
						       </el-form-item>
							   <el-form-item label="最大宽度:">
							       <el-input v-model="maxWidth9"></el-input>
							   </el-form-item>
						       <el-form-item label="长度总和:">
						           <el-input v-model="totalLength9"></el-input>
						       </el-form-item>
							   <el-form-item label="最大长度占比:">
							       <el-input v-model="Lengthper9"></el-input>
							   </el-form-item>
						</el-form>
					</el-card>
					</el-dialog>
			<!-- 	g":{"bridge_id","梁体腹板竖向裂缝跨径","宽度总和_mm_field",
				"平均宽度_mm_field","平均数量","平均长度_cm_field","数量",
				"最大宽度_mm_field","最大长度占比","长度总和_cm_field"}, -->
		<el-dialog v-model="iner10"
					title="梁体腹板竖向裂缝"
					width="50%"
					>
					<el-card >
						<el-form
						        style="margin:30px auto;"
							    label-width="180px"
							    class="demo-ruleForm" >
						<el-form-item label="梁体腹板竖向裂缝跨径: ">
						     <el-input v-model="kuai10"></el-input>
						   </el-form-item>
						   <el-form-item label="宽度总和:">
						          <el-input v-model="totalWidth10"></el-input>
						      </el-form-item>
						   <el-form-item label="平均宽度:">
						          <el-input v-model="averageWidth10"></el-input>
						      </el-form-item>
						       <el-form-item label="平均数量">
						           <el-input v-model="averageCount10"></el-input>
						       </el-form-item>
						       <el-form-item label="平均长度:">
						           <el-input v-model="averageLength10"></el-input>
						       </el-form-item>
						       <el-form-item label="数量">
						           <el-input v-model="count10"></el-input>
						       </el-form-item>
							   <el-form-item label="最大宽度:">
							       <el-input v-model="maxWidth10"></el-input>
							   </el-form-item>
						       <el-form-item label="长度总和:">
						           <el-input v-model="totalLength10"></el-input>
						       </el-form-item>
							   <el-form-item label="最大长度占比:">
							       <el-input v-model="Lengthper10"></el-input>
							   </el-form-item>
						</el-form>
					</el-card>
					</el-dialog>
				<!-- "梁体翼板横向裂缝跨径","宽度总和_mm_field","平均宽度_mm_field",
				"平均数量","平均长度_cm_field","平均间距",
				"数量","最大宽度_mm_field","最大长度_cm_field","长度总和_cm_field"}, -->
		<el-dialog v-model="iner11"
					title="梁体翼板横向裂缝"
					width="50%"
					>
					<el-card >
						<el-form
						        style="margin:30px auto;"
							    label-width="180px"
							    class="demo-ruleForm" >
						<el-form-item label="梁体翼板横向裂缝跨径: ">
						     <el-input v-model="kuai11"></el-input>
						   </el-form-item>
						   <el-form-item label="宽度总和:">
						          <el-input v-model="totalWidth11"></el-input>
						      </el-form-item>
						   <el-form-item label="平均宽度:">
						          <el-input v-model="averageWidth11"></el-input>
						      </el-form-item>
						       <el-form-item label="平均数量">
						           <el-input v-model="averageCount11"></el-input>
						       </el-form-item>
						       <el-form-item label="平均长度:">
						           <el-input v-model="averageLength11"></el-input>
						       </el-form-item>
							   <el-form-item label="平均间距:">
							       <el-input v-model="averageDistance11"></el-input>
							   </el-form-item>
						       <el-form-item label="数量">
						           <el-input v-model="count11"></el-input>
						       </el-form-item>
							   <el-form-item label="最大宽度:">
							       <el-input v-model="maxWidth11"></el-input>
							   </el-form-item>
						       <el-form-item label="长度总和:">
						           <el-input v-model="totalLength11"></el-input>
						       </el-form-item>
							   <el-form-item label="最大长度:">
							       <el-input v-model="maxLength11"></el-input>
							   </el-form-item>
						</el-form>
					</el-card>
					</el-dialog>
<!-- 			"墩台钢筋腐蚀跨径","平均数量","平均长度_m_field",
			"数量","最大长度_m_field","长度总和_m_field"} -->
			<el-dialog v-model="iner12"
						title="墩台钢筋腐蚀"
						width="50%"
						>
						<el-card >
							<el-form
							        style="margin:30px auto;"
								    label-width="180px"
								    class="demo-ruleForm" >
							<el-form-item label="墩台钢筋腐蚀跨径: ">
							     <el-input v-model="kuai12"></el-input>
							   </el-form-item>
							       <el-form-item label="平均数量">
							           <el-input v-model="averageCount12"></el-input>
							       </el-form-item>
							       <el-form-item label="平均长度:">
							           <el-input v-model="averageLength12"></el-input>
							       </el-form-item>

							       <el-form-item label="数量">
							           <el-input v-model="count12"></el-input>
							       </el-form-item>
							       <el-form-item label="长度总和:">
							           <el-input v-model="totalLength12"></el-input>
							       </el-form-item>
								   <el-form-item label="最大长度:">
								       <el-input v-model="maxLength12"></el-input>
								   </el-form-item>
							</el-form>
						</el-card>
						</el-dialog>
	<!-- 		 
					</el-col>
					</el-row> -->
				
				</div>	 
				</el-card>	
				<div style="text-align: center; margin:20px"  >
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible2 = false">取 消</el-button>
					 <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
				 </span>
				 </div>
				</el-dialog>
  		</div>
   </el-card>

   </div>

	
</template>

<script>
import axios from "axios"

export default {
	name: 'page2',

	data() {
	  return {

		averageCount: null,averageArea: null,totalArea: null,
		count: null,maxArea: null,kuai:null,
		
		kuai7:null,averageCount7:null,totalLength7:null,
		totalWidth7:null,averageLength7:null,Lengthper7:null,
		averageWidth7:null,count7:null,maxWidth7:null,countperm7:null,
		
		kuai9:null,averageCount9:null,totalLength9:null,
		totalWidth9:null,averageLength9:null,Lengthper9:null,
		averageWidth9:null,count9:null,maxWidth9:null,
		
		kuai3:null,averageCount3:null,totalLength3:null,
	    averageLength3:null,count3:null,maxLength3:null,
		
		kuai10:null,averageCount10:null,totalLength10:null,
		totalWidth10:null,averageLength10:null,Lengthper10:null,
		averageWidth10:null,count10:null,maxWidth10:null,
		
		kuai11:null,averageCount11:null,totalLength11:null,
		totalWidth11:null,averageLength11:null,averageDistance11:null,
		averageWidth11:null,count11:null,maxWidth11:null,maxLength11:null,
		
		kuai5:null,averageCount5:null,totalLength5:null,
		totalWidth5:null,averageLength5:null,
		averageWidth5:null,count5:null,maxWidth5:null,maxLength5:null,

       kuai4:null,averageCount4:null,count4:null,
	   kuai6:null,averageCount6:null,count6:null,
	   
	   averageCount8: null,averageArea8: null,totalArea8: null,
	   count8: null,maxArea8: null,kuai8:null,
	   
	   kuai2:null,averageCount2:null,totalLength2:null,
	   totalWidth2:null,averageLength2:null,
	   averageWidth2:null,count2:null,maxWidth2:null,maxLength2:null,
	   
	   kuai12:null,averageCount12:null,totalLength12:null,
	  averageLength12:null,count12:null,maxLength12:null,
	   
	    ruleForm: {
			bridge_id:"",
			checktime: "",
			buildtime: "",
			traffic: "",
			shangxiahang : "",
			force: "",
			grage:"",

	    },
	    rules: {
			bridge_id: [
			   { required: 'true', message: '基本信息不能为空', trigger: 'blur' }
			 ],
			checktime: [
			   { required: 'true', message: '基本信息不能为空', trigger: 'blur' }
			 ],
			 buildtime: [
			   { required: 'true', message: '基本信息不能为空', trigger: 'blur' },
			 ],
			 traffic: [
			   { required: 'true', message: '基本信息不能为空', trigger: 'blur' },
			 ],
			shangxiahang: [
			   { required: 'true', message: '基本信息不能为空', trigger: 'blur' },
			 ],
			 force: [
			   { required: 'true', message: '基本信息不能为空', trigger: 'blur' },
			 ],
			 grade: [
			    { required: 'true', message: '基本信息不能为空', trigger: 'blur' }
			  ],
	    },
		dialogVisible: false,
		dialogVisible2: false,
		iner: false,iner2: false,iner3: false,iner4: false,
		iner5: false,iner6: false,iner7: false,iner8: false,
		iner9: false, iner10: false,iner11: false,iner12: false,
		tableData: [],
		delete_id:null,
		change_id:null,
		change_thing:null,
		change_ziduan:null,
	  };
	},

	methods: {	
		 handleClose(done) {
		        this.$confirm('确认关闭？')
		          .then(_ => {
		            done();
		          })
		          .catch(_ => {});
		      },
		 tableRowClassName({row, rowIndex}) {
		        if (rowIndex % 4 === 1) {
		          return 'warning-row';
		        } else if (rowIndex % 4 === 3) {
		          return 'success-row';
		        }
		        return '';
		      },
		goToPage(route) {
		      this.$router.push(route);
		    },
		 handleClick(row) {
		        console.log(row);
		      },
			
		Delete1(){
			axios({
			      method:'post',
			      url:'/delete_datalist/',
				  headers: {
				    "Access-Control-Allow-Origin": "*",
				    "Content-Type": "application/json;charset=utf-8",
				  	'Authorization': localStorage.eleToken
				  },
				  data:
				  { 'bridge_id': this.delete_id},
			      
			    }).then(res=>{
					console.log(res)
					
					this.$message.success('删除成功');
					}).catch(error => {
			           console.error(error);
			           this.$message.error('删除失败'); // 显示失败的提示消息
			        });
			},
			
			change1()
			{
				var  ziduan =this.change_ziduan;
				axios({
				      method:'post',
				      url:'/update_datalist/',
					  headers: {
					    "Access-Control-Allow-Origin": "*",
					    "Content-Type": "application/json;charset=utf-8",
					  	'Authorization': localStorage.eleToken
					  },
					  data:
					  { "bridge_id": this.change_id ,
					     "App01BasicInfo": {
					           ziduan : this.change_thing,				            
					          },
					  
					  },
				      
				    }).then(res=>{
						console.log(res)
						
						this.$message.success('修改成功');
						}).catch(error => {
				           console.error(error);
				           this.$message.error('修改失败'); // 显示失败的提示消息
				        });
				
			},
			
			showForm(formName) {
			  axios({
			      method:'post',
			      url:'/datalist/',
			      headers: {
			        "Access-Control-Allow-Origin": "*",
			        "Content-Type": "application/json;charset=utf-8",
			  		'Authorization': localStorage.eleToken
			      }
			    }).then(res=>{
					console.log(res)
					console.log(res.data)
					this.tableData = res.data; 
					
					 this.$message.success('刷新成功');
					})
			  
			},

		addForm(formName) {
		for (const key in this.ruleForm) {
		    if (this.ruleForm.hasOwnProperty(key) && (this.ruleForm[key] === null || this.ruleForm[key] === undefined)) {
		      this.ruleForm[key] = 0;
		    }
		  }
		  axios({
		      method:'post',
		      url:'/add_datalist/',
			  headers: {
			    "Access-Control-Allow-Origin": "*",
			    "Content-Type": "application/json;charset=utf-8",
			  	'Authorization': localStorage.eleToken
			  },
			  data:
			  {
				 "App01BasicInfo": {
				        "桥梁id": this.ruleForm.bridge_id || 0,
				        "定期检查时间": this.ruleForm.checktime || 0,
				        "工作时间": this.ruleForm.buildtime || 0,
				        "年日均交通量": this.ruleForm.traffic || 0,
				        "建成时间": this.ruleForm.buildtime || 0,
				        "上下行": this.ruleForm.shangxiahang || 0,
				        "是否预应力桥梁": this.ruleForm.force || 0,
				      },
				 "BeamBaseplateConcreteCracking":{
					'bridge_id':this.ruleForm.bridge_id || 0,
					'梁体底板混凝土破损跨径':this.kuai8,
					'平均数量':this.averageCount8||0,
					'平均面积_m2_field':this.averageArea8||0,
					'总面积_m2_field':this.totalArea8||0,
					'数量':this.count8||0,
					'最大面积_m2_field':this.maxArea8||0,},
				"BeamBaseplateXCracking":{
				"bridge_id":this.ruleForm.bridge_id || 0,
				"梁体底板横向裂缝跨径":this.kuai7||0,
				"宽度总和_mm_field":this.totalWidth7||0,
				"平均宽度_mm_field":this.averageWidth7||0,
				"平均数量":this.averageCount7||0,
				"平均长度_cm_field":this.averageLength7||0,
				"数量":this.count7||0,
				"最大宽度_mm_field":this.maxWidth7||0,
				"最大长度占比":this.Lengthper7||0,
				"每延米数量":this.countperm7||0,
				"长度总和_cm_field":this.totalLength7||0,},
				
				"BeamBaseplateYCracking":{
					"bridge_id":this.ruleForm.bridge_id || 0,
					"梁体底板纵向裂缝跨径":this.kuai9||0,
					"宽度总和_mm_field":this.totalWidth9||0,
					"平均宽度_mm_field":this.averageWidth9||0,
					"平均数量":this.averageCount9||0,
					"平均长度_cm_field":this.averageLength9||0,
					"数量":this.count9||0,
					"最大宽度_mm_field":this.maxWidth9||0,
					"最大长度占比":this.Lengthper9||0,
					"长度总和_cm_field":this.totalLength9||0,},
					
				"BeamSteelCorrosion":{"bridge_id":this.ruleForm.bridge_id || 0,
				"梁体钢筋锈蚀跨径":this.kuai3|| 0,
				"平均数量":this.averageCount3||0,
				"平均长度_m_field":this.averageLength3||0,
				"数量":this.count3||0,
				"最大长度_m_field":this.maxLength3||0,
				"长度总和_m_field":this.totalLength3||0,},
				
				"BeamWebplateConcreteCracking":{"bridge_id":this.ruleForm.bridge_id || 0,
				"梁体腹板混凝土破损跨径":0,"平均数量":0,
				"平均面积_m2_field":0,"总面积_m2_field":0,"数量":0,"最大面积_m2_field":0},
				"BeamWebplateZCracking":{"bridge_id":this.ruleForm.bridge_id || 0,
				"梁体腹板竖向裂缝跨径":this.kuai10||0,
				"宽度总和_mm_field":this.totalWidth10||0,
				"平均宽度_mm_field":this.averageWidth10||0,
				"平均数量":this.averageCount10||0,
				"平均长度_cm_field":this.averageLength10||0,
				"数量":this.count10||0,
				"最大宽度_mm_field":this.maxWidth10||0,
				"最大长度占比":this.Lengthper10||0,
				"长度总和_cm_field":this.totalLength10||0,},
				
				"BeamWingplateXCracking":{"bridge_id":this.ruleForm.bridge_id || 0,
				"梁体翼板横向裂缝跨径":this.kuai11 || 0,
				"宽度总和_mm_field":this.totalWidth11 || 0,
				"平均宽度_mm_field":this.averageWidth11|| 0,
				"平均数量":this.averageCount11|| 0,
				"平均长度_cm_field":this.averageLength11|| 0,
				"平均间距":this.averageDistance11|| 0,
				"数量":this.count11|| 0,
				"最大宽度_mm_field":this.maxWidth11|| 0,
				"最大长度_cm_field":this.maxLength11|| 0,
				"长度总和_cm_field": this.totalLength11|| 0,},
				
				"BearingCracking":{"bridge_id":this.ruleForm.bridge_id || 0,
				"支座开裂跨径":this.kuai5||0,
				"宽度总和_mm_field":this.totalWidth5|| 0,
				"平均宽度_mm_field":this.averageWidth5|| 0,
				"平均数量":this.averageCount5|| 0,
				"平均长度_cm_field":this.averageLength5|| 0,
				"数量":this.count5|| 0,
				"最大宽度_mm_field":this.maxWidth5|| 0,
				"最大长度_cm_field":this.maxLength5|| 0,
				"长度总和_cm_field": this.totalLength5|| 0,
				},
				"BearingDeformation":{"bridge_id":this.ruleForm.bridge_id || 0,
				"支座变形跨径":this.kuai4||0,
				"平均数量":this.averageCount4|| 0,
				"数量":this.count4|| 0,},
				"BearingHanging":{"bridge_id":this.ruleForm.bridge_id || 0,
				"支座脱空跨径":this.kuai6||0,
				"平均数量":this.averageCount6|| 0,
				"数量":this.count6|| 0,},
				"BridgeGrading":{"bridge_id":this.ruleForm.bridge_id || 0,
				"桥梁等级":this.ruleForm.grade || 0,},
				"ConcreteBreakage":{
					"bridge_id":this.ruleForm.bridge_id || 0,
					"缩缝混凝土开裂跨径":this.kuai||0,
					'平均数量':this.averageCount||0,
					'平均面积_m2_field':this.averageArea||0,
					'总面积_m2_field':this.totalArea||0,
					'数量':this.count||0,
					'最大面积_m2_field':this.maxArea||0,
					},
				"PierCracking":{
				"bridge_id":this.ruleForm.bridge_id || 0,
				"墩台裂缝跨径":this.kuai2|| 0,
				"宽度总和_mm_field":this.totalWidth2 || 0,
				"平均宽度_mm_field":this.averageWidth2|| 0,
				"平均数量":this.averageCount2|| 0,
				"平均长度_cm_field":this.averageLength2|| 0,
				"数量":this.count2|| 0,
				"最大宽度_mm_field":this.maxWidth2|| 0,
				"最大长度_cm_field":this.maxLength2|| 0,
				"长度总和_cm_field": this.totalLength2|| 0,},
				"PierSteelCorrosion":{"bridge_id":this.ruleForm.bridge_id || 0,
				"墩台钢筋腐蚀跨径":this.kuai12|| 0,
				"平均数量":this.averageCount12|| 0,
				"平均长度_cm_field":this.averageLength12|| 0,
				"数量":this.count12|| 0,
				"最大长度_cm_field":this.maxLength12|| 0,
				"长度总和_cm_field": this.totalLength12|| 0,}
				
			  },
			  
		      
		    }).then(res=>{
				console.log(res)
				this.$message.success('添加成功');
				}).catch(error => {
                   console.error(error);
                   this.$message.error('添加失败'); // 显示失败的提示消息
                });
		},
		
		// showForm(formName) {
		//   axios({
		//       method:'post',
		//       url:'/datalist/',
		//       headers: {
		//         "Access-Control-Allow-Origin": "*",
		//         "Content-Type": "application/json;charset=utf-8",
		//   		'Authorization': localStorage.eleToken
		//       }
		//     }).then(res=>{
		// 		console.log(res)
		// 		console.log(res.data)
		// 		this.tableData = res.data; 
				
		// 		this.$message.success('刷新成功');
		// 		})
		  
		// },
	},
	mounted() {
		      this.showForm('FormName'); // 点击查询按钮时调用 showForm 方法获取数据
		    },
	
};

</script>

<style>
	a {
	  text-decoration: none;
	  color:#fff;
	  
	}
	 
	.router-link-active {
	  text-decoration: none;
	  color:#ffd04b ;
	}
	.box-card {
	  margin: auto auto;
	  width: 580px;

	 background-color:rgba(255, 255, 255, 0.8); 
	}
	.box-card2 {
	  margin: 50px auto;
	  width:90%;
	/* 
	  background-color:rgba(255,255,255,0.8); */
	}
	.picture-box{
	 /*    height: 100vh; */
		 margin-left:22vh;
	
	  }
		  
	.btnGroup{
		margin: auto auto;
		justify: center;
	}
	.card-header {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  font-size: 25px;
	}
	.el-radio-group {
	  margin-right: 12px;
	}
		
	.header1{
		margin:20px 10%;
		font-size: 30px;
	}
	
	
	#page {
	    background-color: rgb(240,240,240);
		
							 
	}
	#whole {
	    position: relative;
	    float:right;
	    width:100%;
		
	}
	 .el-table .warning-row {
	    background: oldlace;
	  }
	
	  .el-table .success-row {
	    background: #f0f9eb;
	  }
	
		
	.bk1{
		
		background-color: #07192f
		
	}
		
	.bk2{
		/* background-image: url("../../public/picture/svg.png"); */
		background-size: cover;
		
	}
</style>