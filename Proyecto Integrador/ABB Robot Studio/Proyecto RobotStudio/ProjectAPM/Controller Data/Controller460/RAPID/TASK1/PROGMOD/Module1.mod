MODULE Module1
    CONST robtarget Home:=[[1505,0,103],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_10_2:=[[50,1355.932739642,440.063813792],[0,0,1,0],[1,0,1,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_10:=[[50,1355.932739642,20.063813792],[0,0,1,0],[1,0,1,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_20:=[[1492.279,-45.618,556.14],[-0,0,0.996194698,-0.087155742],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Home_4:=[[1305,-350,-227],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    !***********************************************************
    !
    ! Module:  Module1
    !
    ! Description:
    !   <Insert description here>
    !
    ! Author: Compa
    !
    ! Version: 1.0
    !
    !***********************************************************
    
    
    !***********************************************************
    !
    ! Procedure main
    !
    !   This is the entry point of your program
    !
    !***********************************************************
    PROC main()
         VAR robtarget palletpos :=[[1305,-350,-227],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
         VAR robtarget palletposa := [[1305,-350,-227],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
        
        Reset DO_Start;
        Reset DO_Pieza;
        Reset DO_Attatch;
        Reset DO_Dettatch;

        
        WHILE TRUE DO
            
            IF DI_INIT=1 THEN
                Path_10;
                
                FOR k FROM 0 TO 2 DO
                    
                    
                    FOR i FROM 0 TO 2 DO
                        Set DO_Start;
                        WaitTime 4;
                        Reset DO_Start;
                        Path_30;
                
                        Path_20;
                        WaitTime 1;
                        Set DO_Attatch;
                        WaitTime 1;
                        Path_30;
                        Reset DO_Attatch;
                        
                        palletposa := Offs(palletpos, 0, i*260, k*380+400);
                        
                        MoveJ palletposa, v1000, fine, tGripper\WObj:=wobj0;
                        
                        palletposa := Offs(palletpos, 0, i*260, k*380);
                        MoveL palletposa, v1000, fine, tGripper\WObj:=wobj0;
                        
                        WaitTime 1;
                        Set DO_Dettatch;
                        WaitTime 1;
                        palletposa := Offs(palletpos, 0, i*260, k*380+400);
                        MoveL palletposa, v1000, fine, tGripper\WObj:=wobj0;
                        Reset DO_Dettatch;
                        
                        
                        
                        
                    ENDFOR
                    FOR i FROM 0 TO 2 DO
                        Set DO_Start;
                        WaitTime 4;
                        Reset DO_Start;
                        Path_30;
                
                        Path_20;
                        WaitTime 1;
                        Set DO_Attatch;
                        WaitTime 1;
                        Path_30;
                        Reset DO_Attatch;
                        
                        palletposa := Offs(palletpos, 400, i*260, k*380+400);
                        
                        MoveJ palletposa, v1000, fine, tGripper\WObj:=wobj0;
                        
                        palletposa := Offs(palletpos, 400, i*260, k*380);
                        MoveL palletposa, v1000, fine, tGripper\WObj:=wobj0;
                        
                        WaitTime 1;
                        Set DO_Dettatch;
                        WaitTime 1;
                        palletposa := Offs(palletpos, 400, i*260, k*380+400);
                        MoveL palletposa, v1000, fine, tGripper\WObj:=wobj0;
                        Reset DO_Dettatch;
                        
                        
                        
                        
                    ENDFOR
                    FOR i FROM 0 TO 2 DO
                        Set DO_Start;
                        WaitTime 4;
                        Reset DO_Start;
                        Path_30;
                
                        Path_20;
                        WaitTime 1;
                        Set DO_Attatch;
                        WaitTime 1;
                        Path_30;
                        Reset DO_Attatch;
                        
                        palletposa := Offs(palletpos, 800, i*260, k*380+400);
                        
                        MoveJ palletposa, v1000, fine, tGripper\WObj:=wobj0;
                        
                        palletposa := Offs(palletpos, 800, i*260, k*380);
                        MoveJ palletposa, v1000, fine, tGripper\WObj:=wobj0;
                        
                        WaitTime 1;
                        Set DO_Dettatch;
                        WaitTime 1;
                        palletposa := Offs(palletpos, 800, i*260, k*380+400);
                        MoveL palletposa, v1000, fine, tGripper\WObj:=wobj0;
                        Reset DO_Dettatch;
                        
                        
                        
                        
                    ENDFOR
                ENDFOR
                Set DO_Finish;
                WaitTime 1;
                Reset DO_Finish;
                                 
            ENDIF
            
            
        ENDWHILE
        
    ENDPROC
    PROC Path_10()
        MoveL Home,v1000,z10,tGripper\WObj:=wobj0;

    ENDPROC
    PROC Path_20()
        MoveL Target_10,v1000,z10,tGripper\WObj:=wobj0;

    ENDPROC
    PROC Path_30()
        MoveJ Target_10_2,v1000,z10,tGripper\WObj:=wobj0;
    ENDPROC
    PROC Path_40()
        MoveL Home_4,v1000,z10,tGripper\WObj:=wobj0;
    ENDPROC
ENDMODULE