import datetime
from datetime import timedelta
from dateutil.relativedelta import relativedelta

def return_date_format(humanTime):
    """This returns the datetime format of any time
    writing in human form eg:3hours 4days 2years"""
    MyDatetime = None
    strTime = [i for i in ['minute','hour','day','year'] if i in humanTime][0]
    intTime = int([humanTime.replace(i,' ').split(' ')[0] for i in ['minute','hour','day','year'] if i in humanTime][0])
    
    now = datetime.datetime.now()
    if strTime == 'minute':
        MyDatetime = now+timedelta(minutes=intTime)
    elif strTime == 'hour':
        MyDatetime = now+timedelta(hours=intTime)
    elif strTime == 'day':
        MyDatetime = now+timedelta(days=intTime)
    else:
        MyDatetime = now + relativedelta(years=intTime)

    return(MyDatetime)


def returnBoolean(str):
    if str == 'true':
        return(True)
    else:
        return(False)
    
def without_keys(d, keys):
    return {x: d[x] for x in d if x not in keys}


def user_reward(trust_score,reward):
    reward = float(reward)
    trust_score = float(trust_score)

    if trust_score >= 80:
        return(reward)
    elif trust_score >= 60:
        result = (reward*80)/100
        return(result)
    elif trust_score >= 40:
        result = (reward*60)/100
        return(result)
    elif trust_score >= 20:
        result = (reward*40)/100
        return(result)
    else:
        result = (reward*20)/100
        return(result)

def reward_ratio(trust_score):
    trust_score = float(trust_score)

    if trust_score >= 80:
        return(1.0)
    elif trust_score >= 60:
        return(0.8)
    elif trust_score >= 40:
        return(0.6)
    elif trust_score >= 20:
        return(0.4)
    else:
        return(0.2)


def gather_related_data(d,key):
    data = {}
    data[key] = list({x: d[x] for x in d if x.split('.')[0] == key}.values())
    return(data)

def checkKey(dict,key,default):
    result = dict.get(key)
    if result:
        return(result)
    else:
        return(default)

def useDefault(formData):
    myData = {}
    myData['worker_score'] = checkKey(formData,'worker_score',0)
    myData['product_preview'] = checkKey(formData,'product_preview',None)
    myData['task_deadline'] = checkKey(formData,'task_deadline','4 hours')
    myData['task_proof_example'] = checkKey(formData,'task_proof_example','')
    myData['task_duration'] = return_date_format(checkKey(formData,'task_duration','3days'))
    myData['use_proof_example'] = returnBoolean(checkKey(formData,'use_proof_example','false'))
    myData['has_product_images'] = returnBoolean(checkKey(formData,'has_product_images','false'))
    myData['conceal_product_link'] = returnBoolean(checkKey(formData,'conceal_product_link','true'))
    
    
    return(myData)


def get_object_or_none(object,**kwargs):
   try:
       return(object.objects.get(**kwargs))
   except object.DoesNotExist:
       return(None)